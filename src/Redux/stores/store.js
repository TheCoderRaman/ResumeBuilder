import { configureStore } from '@reduxjs/toolkit';
import formsSlice from './../features/forms/formsSlice';
import settingsSlice from './../features/settings/settingsSlice';
import templatesReducer from './../features/templates/templatesSlice';

export const store = configureStore({
  reducer: {
    forms: formsSlice,
    settings: settingsSlice,
    templates: templatesReducer
  },
});
