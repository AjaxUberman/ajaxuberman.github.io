import { configureStore } from "@reduxjs/toolkit";
import activeReducer from "../features/active/activeSlice";

export default configureStore({
  reducer: {
    active: activeReducer,
  },
});
