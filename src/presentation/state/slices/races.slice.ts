import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RaceEntity } from "~/domain/entities/race.entity";

export interface RacesState {
  races: RaceEntity[]
  total: number
}

const initialState: RacesState = {
  races: [],
  total: 0
}

export const racesSlice = createSlice({
  name: 'races',
  initialState,
  reducers: {
    updateRaces(state, action: PayloadAction<RacesState>) {
      state.races = action.payload.races;
      state.total = action.payload.total;
    }
  }
});

export const { updateRaces } = racesSlice.actions;
export const racesReducer = racesSlice.reducer;
