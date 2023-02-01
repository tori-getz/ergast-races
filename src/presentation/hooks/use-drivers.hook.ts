import { useInjection } from "inversify-react";
import { useEffect } from "react";
import { showMessage } from "react-native-flash-message";
import { useDispatch, useSelector } from "react-redux";
import { GET_DRIVERS } from "~/core/di/types";
import { DriverEntity } from "~/domain/entities/driver.entity";
import { GetDrivers } from "~/domain/usecases/get-drivers.use-case";
import { updateDrivers } from "../state/drivers.slice";
import { RootState } from "../state/root.store";

export interface UseDrivers {
  drivers: DriverEntity[]
  loadDrivers: (limit: number, offset: number) => Promise<void>
}

export const useDrivers = (): UseDrivers => {
  const getDriversUseCase = useInjection<GetDrivers>(GET_DRIVERS);

  const drivers = useSelector<RootState>(state => state.drivers as DriverEntity[]);
  const dispatch = useDispatch();

  useEffect(() => {
    alert(drivers.length);
  }, [drivers]);

  const loadDrivers = async (limit: number, offset: number): Promise<void> => {
    const driversEither = await getDriversUseCase.run({
      limit,
      offset
    });

    driversEither.mapLeft((e) => {
      console.log(e);
      showMessage({
        type: 'danger',
        message: e.message ?? 'Error'
      });
    });

    driversEither.mapRight((drivers) => {
      dispatch(updateDrivers(drivers));
    });
  };

  return {
    drivers: drivers as DriverEntity[], // костыль, to do убрать
    loadDrivers
  }
}
