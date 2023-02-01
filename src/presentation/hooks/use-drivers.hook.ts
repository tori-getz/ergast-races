import { useInjection } from "inversify-react";
import { showMessage } from "react-native-flash-message";
import { useDispatch, useSelector } from "react-redux";
import { GET_DRIVERS } from "~/core/di/types";
import { DriverEntity } from "~/domain/entities/driver.entity";
import { GetDrivers } from "~/domain/usecases/get-drivers.use-case";
import { updateDrivers } from "../state/slices/drivers.slice";
import { RootState } from "../state/root.store";

interface UseDrivers {
  drivers: DriverEntity[]
  total: number
  loadDrivers: (limit: number, offset: number) => Promise<void>
}

export const useDrivers = (): UseDrivers => {
  const getDriversUseCase = useInjection<GetDrivers>(GET_DRIVERS);

  const drivers = useSelector<RootState>(state => state.drivers.drivers);
  const total = useSelector<RootState>(state => state.drivers.total);
  
  const dispatch = useDispatch();

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
    total: total as number,
    loadDrivers
  }
}
