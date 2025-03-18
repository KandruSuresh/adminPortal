import { useEffect } from "react";
import { useNavigate, Outlet } from "react-router-dom";
import BaseLayout from "./BaseLayout";

// component
const ProtectedRoute = () => {
    const navigate = useNavigate();
    const isAuthenticated = true; 

    useEffect(() => {
        if (!isAuthenticated) {
            navigate('/', { replace: true });
        }
    }, [isAuthenticated, navigate]);

    return (
        <>
            <Outlet />
        </>
    );
};

export default ProtectedRoute;