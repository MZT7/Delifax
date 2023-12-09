"use client";

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  isLoading: false,
  token: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    startLoading: (state) => {
      state.isLoading = true;
    },
    stopLoading: (state) => {
      state.isLoading = false;
    },
    getUser: (state, action) => {
      state.user = action.payload;
    },
    getToken: (state, action) => {
      state.token = action.payload;
    },
    logOut: (state, action) => {
      state.token = null;
      state.user = null;
    },
  },
});

export const { startLoading, stopLoading, getUser, getToken, logOut } =
  authSlice.actions;

export default authSlice.reducer;
