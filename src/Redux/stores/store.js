import { configureStore } from '@reduxjs/toolkit';
import formsSlice from './../features/forms/formsSlice';
import settingsSlice from './../features/settings/settingsSlice';

export const store = configureStore({
  reducer: {
    forms: formsSlice,
    settings: settingsSlice,
  },
});
