import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { DriverEntity } from "~/domain/entities/driver.entity";

const initialState: DriverEntity[] = []; // очень не нравится, что так, должно ведь быть как то по другому. в моем случае effector подходит лучше

export const driversSlice = createSlice({
  name: 'drivers',
  initialState,
  reducers: {
    updateDrivers(_state, action: PayloadAction<DriverEntity[]>) {
      _state = action.payload;
    }
  }
});

export const { updateDrivers } = driversSlice.actions;
export const driversReducer = driversSlice.reducer;
