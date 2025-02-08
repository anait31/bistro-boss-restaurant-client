import { useContext } from "react";
import { authContext } from "../providers/AuthProviders";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoutes = ({children}) => {
    const {user, loading} = useContext(authContext);
    const location = useLocation();
    console.log(location);
    if(loading) {
        return "Loading"
    }
    if(user) {
        return children;
    }
    return <Navigate to={'/login'} state={{from: location}}></Navigate>
};

export default PrivateRoutes;