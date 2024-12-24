import { createSlice } from "@reduxjs/toolkit";

const locationSlice = createSlice({
  name: "location",
  initialState: "null",
  reducers: {
    addLocation: (state, action) => {
      return action.payload;
    },
    removeLocation: () => {
      return null;
    },
  },
});

export const { addLocation, removeLocation } = locationSlice.actions;
export default locationSlice.reducer;
