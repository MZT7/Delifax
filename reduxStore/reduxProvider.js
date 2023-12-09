"use client";
import { Provider } from "react-redux";
import { store, persistor } from "@/reduxStore/store";
import { useLoadUserEffect } from "./features/auth/authSlice";
import { useEffect, useState } from "react";
import { PersistGate } from "redux-persist/integration/react";
import { QueryClient, QueryClientProvider } from "react-query";

const ReduxProvider = ({ children }) => {
  // const onReload = useLoadUserEffect();
  // useEffect(() => {
  //   onReload;
  // }, []);
  const [queryClient] = useState(() => new QueryClient());

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <QueryClientProvider client={queryClient}>
          {children}
        </QueryClientProvider>
      </PersistGate>
    </Provider>
  );
};

export default ReduxProvider;
