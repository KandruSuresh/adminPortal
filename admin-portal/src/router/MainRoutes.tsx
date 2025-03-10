
import { Route, Routes } from "react-router-dom";
import { Login } from "../pages/Login/Login";
import { Dashboard } from "../components/Dashboard";
import { AppProvider } from "../context/AppContext";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { BrowserRouter as Router } from "react-router-dom";

export const MainRoutes = () => {
    const { loginData } = useContext(AuthContext);
    return (
        <>
            {loginData ? (
                <>
                    <AppProvider>
                        <Dashboard />
                    </AppProvider>
                </>
            ) : (
                <Routes>
                    <Route path='/' element={<Login />} />
                </Routes>
            )}</>
    )
}
