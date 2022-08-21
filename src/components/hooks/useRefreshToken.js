import React from "react";
import { useAuth } from "../context/auth";
import axios from "../api/Axios";

const useRefreshToken = () => {
    const { setAuth } = useAuth();

    const refresh = async () => {
        const response = await axios.get("/refresh", {
            withCredentials: true,
        });
        setAuth((prev) => {
            return {
                ...prev,
                accessToken: response.data.accessToken,
            };
        });

        return response.data.accessToken;
    };
    return refresh;
};

export default useRefreshToken;
