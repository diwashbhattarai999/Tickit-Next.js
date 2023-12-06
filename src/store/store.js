import { configureStore } from "@reduxjs/toolkit";
import homeReducer from "./slices/homeSlice";
import userReducer from "./slices/userSlice";

export const store = configureStore({
  reducer: {
    home: homeReducer,
    user: userReducer,
  },
});
