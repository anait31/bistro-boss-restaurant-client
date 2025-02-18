import { useContext } from "react";
import { authContext } from "../providers/AuthProviders";
import useAdmin from "../hooks/useAdmin";
import { Navigate, useLocation } from "react-router-dom";

const AdminRoutes = ({children}) => {
    const {user, loading} = useContext(authContext);
    const [isAdmin, isAdminLoading] = useAdmin();
    const location = useLocation();

    if(loading || isAdminLoading) {
        return "Loading"
    }
    if(user && isAdmin) {
        return children;
    }
    return <Navigate to={'/'} state={{from: location}}></Navigate>
};

export default AdminRoutes;