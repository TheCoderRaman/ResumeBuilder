import { createSlice } from '@reduxjs/toolkit';
import { templates } from './../../../Data/templates/templates';

export const templatesSlice = createSlice({
  name: "templates",
  initialState: { value: templates },
  reducers: {
    /**
     * Set current selected template.
     *
     * @param any state
     * @param any action
     * @return void
     */
    setCurrentTemplate: (state, action) => {
        state.value.selected = action.payload;
    },
  },
});

export const {
  setCurrentTemplate
} = templatesSlice.actions;

export default templatesSlice.reducer;
