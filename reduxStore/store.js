"use client";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import authReducer from "@/reduxStore/features/auth/authSlice";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
// import storage from "redux-persist/lib/storage";
import createWebStorage from "redux-persist/lib/storage/createWebStorage";
// import storage from "localforage"; // or 'redux-persist/lib/storage/session' for sessionStorage
const createNoopStorage = () => {
  return {
    getItem(_key) {
      return Promise.resolve(null);
    },
    setItem(_key, value) {
      return Promise.resolve(value);
    },
    removeItem(_key) {
      return Promise.resolve();
    },
  };
};

const storage =
  typeof window !== "undefined"
    ? createWebStorage("local")
    : createNoopStorage();
const rootPersistConfig = {
  key: "root",
  // version: 1,
  storage,
  blacklist: ["auth"],
};
const userPersistConfig = {
  key: "user",
  // version: 1,
  storage,
  blacklist: ["isLoading"],
};

const rootReducer = combineReducers({
  auth: persistReducer(userPersistConfig, authReducer),
});
const persistedReducer = persistReducer(rootPersistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: [],
  // middleware: (getDefaultMiddleware) =>
  //   getDefaultMiddleware({
  //     serializableCheck: {
  //       ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
  //     },
  //   }),
});

export const persistor = persistStore(store);
