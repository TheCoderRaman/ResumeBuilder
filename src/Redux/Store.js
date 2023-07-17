import { configureStore } from "@reduxjs/toolkit";
import settingReducer from "./features/settings/settingsSlice";

export const Store = configureStore({
  reducer: {
    settings: settingReducer
  },
});
