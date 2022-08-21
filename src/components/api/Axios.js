import axios from "axios";

// axios.defaults.headers.common["Authorization"] = "sometoken";

const base_URL = "https://moadvice.herokuapp.com/";
// const base_URL = "http://127.0.0.1:8000";

export default axios.create({
    baseURL: base_URL,
});

export const axiosPrivate = axios.create({
    baseURL: base_URL,
    headers: {
        // Authorization: `Bearer ${"fdryry"}`,
        "Content-Type": "application/json",
    },
    withCredentials: true,
});
