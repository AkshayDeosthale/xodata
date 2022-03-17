import { configureStore } from "@reduxjs/toolkit";
import infoReducer from "../src/features/dashboardSlice";

export const store = configureStore({
  reducer: {
    info: infoReducer,
  },
});
