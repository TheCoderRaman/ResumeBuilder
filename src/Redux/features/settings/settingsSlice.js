import { createSlice } from "@reduxjs/toolkit";
import { settings } from "./../../../Data/settings";

export const settingsSlice = createSlice({
  name: "settings",
  initialState: { value: settings },
  reducers: {
    //
  },
});

export default settingsSlice.reducer;
