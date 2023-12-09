// import { axiosPrivate } from "../api/Axios";
// import { useAuth } from "../context/auth";
import { useEffect } from "react";

// import React from "react";
// import useRefreshToken from "./useRefreshToken";
import { axiosPrivate } from "./useAxios";
import { useSelector } from "react-redux";
// import axios from "axios";

const useAxiosPrivate = () => {
  const auth = useSelector((state) => state?.auth);
  useEffect(() => {
    const requestIntercept = axiosPrivate.interceptors.request.use(
      (config) => {
        if (!config.headers["Authorization"]) {
          config.headers["Authorization"] = `Bearer ${auth?.token}`;
        }
        return config;
      },
      (error) => Promise.reject(error)
    );

    const responseIntercept = axiosPrivate.interceptors.response.use(
      (response) => response,
      async (error) => {
        const prevRequest = error?.config;
        if (error?.response?.status === 403 && !prevRequest.sent) {
          prevRequest.sent = true;
          return axiosPrivate(prevRequest);
        }
        return Promise.reject(error);
      }
    );

    return () => {
      axiosPrivate.interceptors.response.eject(responseIntercept);
      axiosPrivate.interceptors.request.eject(requestIntercept);
    };
  }, [auth]);

  return axiosPrivate;
};

export default useAxiosPrivate;
