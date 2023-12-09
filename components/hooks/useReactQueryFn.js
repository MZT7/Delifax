// Import the necessary dependencies from the react-query and custom hooks
import { useMutation, useQuery } from "react-query";
import useAxios from "./useAxios";
import Alert from "../Ads/alert";
import useAxiosPrivate from "./useAxiosPrivate";
import { useDispatch } from "react-redux";
import { stopLoading } from "@/reduxStore/features/auth/authSlice";

// Define a custom hook called useReactQuery
export const useReactQuery = (key, path, gate = false) => {
  // Call the useAxios and useAxiosPrivate hooks to get the axios instances
  const axiosInstance = useAxios();
  const privateAxiosInstance = useAxiosPrivate();
  const dispatch = useDispatch();

  // Determine the API instance based on the gate parameter
  const apiInstance = gate ? privateAxiosInstance : axiosInstance;

  // Use the useQuery hook to fetch data
  return useQuery({
    queryKey: [key],
    queryFn: () => apiInstance.get(path),
    onSuccess: (data, variables, context) => {
      // Dispatch a stopLoading action upon successful data fetch
      dispatch(stopLoading());
    },
    onError: (err, variables, context) => {
      // Dispatch a stopLoading action upon error and display an appropriate alert message based on the error status
      dispatch(stopLoading());
      if (err?.response?.status) {
        switch (err.response.status) {
          case 400:
            Alert("Missing Values", "error");
            break;
          case 401:
            Alert("Incorrect Input", "error");
            break;
          case 403:
            Alert("Session expired", "error");
            break;
          case 404:
            Alert("Not Found", "error");
            break;
          case 409:
            Alert("Data already exist", "error");
            break;
          default:
            Alert("Network error", "error");
        }
      } else {
        Alert("Network error", "error");
      }
    },
    onSettled: (data, error, variables, context) => {
      // Dispatch a stopLoading action after the query has settled (either success or error)
      dispatch(stopLoading());
    },
  });
};

// Define another custom hook called useReactMutation
export const useReactMutation = (path, method, gate = false) => {
  // Call the useAxios and useAxiosPrivate hooks to get the axios instances
  const axiosInstance = useAxios();
  const privateAxiosInstance = useAxiosPrivate();
  const dispatch = useDispatch();

  // Determine the API instance based on the gate parameter
  const apiInstance = gate ? privateAxiosInstance : axiosInstance;

  // Use the useMutation hook to perform a mutation
  return useMutation({
    mutationFn: (data) =>
      apiInstance[`${method}`](path, data, {
        headers: {
          Authorization: "",
        },
      }),
    onSuccess: (data, variables, context) => {
      // Dispatch a stopLoading action upon successful mutation
      dispatch(stopLoading());
    },
    onError: (err, variables, context) => {
      // Dispatch a stopLoading action upon error and display an appropriate alert message based on the error status
      dispatch(stopLoading());
      if (err?.response?.status) {
        switch (err.response.status) {
          case 400:
            Alert("Missing Values", "error");
            break;
          case 401:
            Alert("Incorrect Input", "error");
            break;
          case 403:
            Alert("Session expired", "error");
            break;
          case 404:
            Alert("Not Found", "error");
            break;
          case 409:
            Alert("Data already exist", "error");
            break;
          default:
            Alert("Network error", "error");
        }
      } else {
        Alert("Network error", "error");
      }
    },
    onSettled: (data, error, variables, context) => {
      // Dispatch a stopLoading action after the mutation has settled (either success or error)
      dispatch(stopLoading());
    },
  });
};
