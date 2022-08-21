import React, { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import { useAuth } from "../context/auth";
import useRefreshToken from "../hooks/useRefreshToken";

const PersistLogin = () => {
    const [isLoading, setIsLoading] = useState(true);
    const { auth } = useAuth();
    const refresh = useRefreshToken();

    useEffect(() => {
        let isMounted = true;

        const verifyLogin = async () => {
            try {
                await refresh();
            } catch (error) {
                console.log(error);
            } finally {
                isMounted && setIsLoading(false);
            }
        };

        !auth.accessToken ? verifyLogin() : setIsLoading(false);

        return () => (isMounted = false);
    }, []);

    return <div>{isLoading ? <p>...loading</p> : <Outlet />}</div>;
};

export default PersistLogin;
