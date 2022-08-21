import { useState, createContext, useContext } from "react";
const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
    const [auth, setAuth] = useState({});

    const login = (...user) => {
        setAuth(user);
    };

    const logout = () => {
        setAuth(null);
    };
    console.log(auth);
    return (
        <AuthContext.Provider value={{ auth, setAuth, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};
export const useAuth = () => {
    return useContext(AuthContext);
};
