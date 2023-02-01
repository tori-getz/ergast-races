import { useInjection } from "inversify-react";
import { showMessage } from "react-native-flash-message";
import { useDispatch, useSelector } from "react-redux";
import { GET_RACES } from "~/core/di/types";
import { RaceEntity } from "~/domain/entities/race.entity";
import { GetRaces } from "~/domain/usecases/get-races.use-case";
import { updateRaces } from "../state/slices/races.slice";
import { RootState } from "../state/root.store";

interface UseRaces {
  races: RaceEntity[],
  total: number,
  loadRaces: (limit: number, offset: number) => Promise<void>;
}

export const useRaces = (): UseRaces => {
  const getRacesUseCase = useInjection<GetRaces>(GET_RACES);

  const races = useSelector<RootState>(state => state.races.races);
  const total = useSelector<RootState>(state => state.races.total);

  const dispatch = useDispatch();

  const loadRaces = async (limit: number, offset: number) => {
    const racesEither = await getRacesUseCase.run({
      limit,
      offset
    });

    racesEither.mapLeft((e) => {
      console.error(e);
      showMessage({
        type: 'danger',
        message: e.message ?? 'Error'
      })
    });

    racesEither.mapRight((races) => {
      dispatch(updateRaces(races));
    });
  }

  return {
    races: races as RaceEntity[],
    total: total as number,
    loadRaces
  }
}
