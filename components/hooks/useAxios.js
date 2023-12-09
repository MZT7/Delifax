import { logOut } from "@/reduxStore/features/auth/authSlice";
import axios from "axios";
import dayjs from "dayjs";
import jwtDecode from "jwt-decode";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Alert from "../Ads/alert";

const baseUrl = "https://dev-backend-service.azurewebsites.net/";
// export default axios.create({
//   baseURL: baseUrl,
// });

export const axiosPrivate = axios.create({
  baseURL: baseUrl,
  headers: {
    // Authorization: `Bearer ${"fdryry"}`,
    // "Content-Type": "application/json",
    Accept: "application/json",
  },
  //   withCredentials: true,
});

const useAxios = () => {
  const token = useSelector((state) => state?.auth?.token);
  const dispatch = useDispatch();

  const userData = useSelector((state) => state?.auth?.user);

  useEffect(() => {
    // const token = localStorage.getItem("token");
    console.log("token", token);

    if (token !== null) {
      const decoded = jwtDecode(token);

      const isExpired = dayjs.unix(decoded.exp).isBefore(dayjs());

      console.log("isExpired: ", isExpired);

      if (isExpired) {
        dispatch(logOut());
      }
    }
  }, [token, dispatch]);

  const axiosInstance = axios.create({
    baseURL: baseUrl,
    headers: {
      // "Content-Type": "multipart/form-data",
      Accept: "application/json",
    },
  });

  // console.log("the logged in state in useAxios hook: ", token);

  // useEffect(() => {
  //   const responseIntercept = axiosInstance.interceptors.response.use(
  //     (res) => res,
  //     async (err) => {
  //       console.log("axios", err);
  //       const prevRequest = err?.config;

  //       if (err.response.status === 403 && !prevRequest.headers.Authorization) {
  //         // prevRequest.sent = true;
  //         logOut();
  //         toast.error("Session has expired! please log in again");
  //       }
  //       return Promise.reject(err);
  //     }
  //   );

  //   return () => {
  //     axiosInstance.interceptors.response.eject(responseIntercept);
  //   };
  // }, []);

  axiosInstance.interceptors.response.use(
    (res) => res,
    async (err) => {
      console.log("axios", err);

      const prevRequest = err?.config;
      if (err.response.status === 403 && !prevRequest._retry) {
        prevRequest._retry = true;
        logOut();
        Alert("Session has expired! please log in again");
        return axiosInstance(prevRequest);
      }
      return Promise.reject(err);
    }
  );

  return axiosInstance;
};

export default useAxios;
