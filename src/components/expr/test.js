import React from "react";
import { Route } from "react-router-dom";

function ProtectedRoutes({ component: Component, ...rest }) {
    return <Route {...rest} element={<Component {...props} />} />;
}

export default ProtectedRoutes;
