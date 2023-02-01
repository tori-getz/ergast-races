import { configureStore } from "@reduxjs/toolkit";
import { driversReducer } from "./drivers.slice";

export const store = configureStore({
  reducer: {
    drivers: driversReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type DispatchType = typeof store.dispatch;

