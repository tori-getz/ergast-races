import { configureStore } from "@reduxjs/toolkit";
import { driversReducer } from "./slices/drivers.slice";
import { racesReducer } from "./slices/races.slice";

export const store = configureStore({
  reducer: {
    drivers: driversReducer,
    races: racesReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type DispatchType = typeof store.dispatch;

