import { createSlice } from "@reduxjs/toolkit";

export const activeSlice = createSlice({
  name: "active",
  initialState: {
    active: "",
  },
  reducers: {
    setActiveStore: (state, action) => {
      state.active = action.payload;
    },
  },
});

export const { setActiveStore } = activeSlice.actions;

export default activeSlice.reducer;
