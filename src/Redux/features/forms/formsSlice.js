import { createSlice } from '@reduxjs/toolkit';
import { forms } from './../../../Data/forms/forms';

export const formsSlice = createSlice({
  name: "forms",
  initialState: { value: forms },
  reducers: {
    /**
     * Set current selected form.
     *
     * @param any state
     * @param any action
     * @return void
     */
    setCurrentForm: (state, action) => {
      state.value.selected = action.payload;
  },
  },
});

export const {
  setCurrentForm
} = formsSlice.actions;

export default formsSlice.reducer;
