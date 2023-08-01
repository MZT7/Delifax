import { configureStore } from "@reduxjs/toolkit";
import authReducer from "@/reduxStore/features/auth/authSlice";

export const store = configureStore({
  reducer: {
    counter: authReducer,
  },
});
