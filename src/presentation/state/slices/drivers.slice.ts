import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { DriverEntity } from "~/domain/entities/driver.entity";

export interface DriversState {
  drivers: DriverEntity[]
  total: number
}

const initialState: DriversState = {
  drivers: [],
  total: 0
}

export const driversSlice = createSlice({
  name: 'drivers',
  initialState,
  reducers: {
    updateDrivers(state, action: PayloadAction<DriversState>) {
      state.drivers = action.payload.drivers;
      state.total = action.payload.total;
    }
  }
});

export const { updateDrivers } = driversSlice.actions;
export const driversReducer = driversSlice.reducer;
