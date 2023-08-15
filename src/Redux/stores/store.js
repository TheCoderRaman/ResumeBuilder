import { configureStore } from '@reduxjs/toolkit';
import settingsSlice from './../features/settings/settingsSlice';

export const store = configureStore({
  reducer: {
    settings: settingsSlice,
  },
});
