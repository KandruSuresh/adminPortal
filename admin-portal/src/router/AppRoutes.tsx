
import { Route, Routes } from "react-router-dom";
import { Login } from "../pages/Login/Login";
import { lazy, Suspense } from "react";
import Error from "../pages/Error";
import { useAppContext } from "../context/AppContext";
const Dashboard = lazy(() => import('../components/Dashboard'));
const Home = lazy(() => import('../pages/Home/Home'));
const Reports = lazy(() => import('../pages/Reports/Reports'));
const Settings = lazy(() => import('../pages/Settings/Settings'));
const Inbox = lazy(() => import('../pages/Inbox/Inbox'));
const Blogs = lazy(() => import('../pages/Blogs/Blogs'));

const PUBLIC_PATH = import.meta.env.VITE_HOST;
const routes = [
    {
        path: '/login',
        element: <Login />,
        isProtected: false,
        isLazy: false
    },
    {
        path: '/',
        element: <Dashboard />,
        isProtected: true,
        isLazy: true
    },
    {
        // path: `${PUBLIC_PATH}/home`,
        path: '/home/*',
        element: <Home />,
        isProtected: true,
        isLazy: true
    },
    {
        path: `/reports/*`,
        element: <Reports />,
        isProtected: true,
        isLazy: true
    },
    {
        path: `/settings/*`,
        element: <Settings />,
        isProtected: true,
        isLazy: true
    },
    {
        path: `/inbox/*`,
        element: <Inbox />,
        isProtected: true,
        isLazy: true
    },
    {
        path: `/blogs/*`,
        element: <Blogs />,
        isProtected: true,
        isLazy: true
    },
    {
        path: `/error`,
        element: <Error />,
        isProtected: false,
        isLazy: false
    }
];

const ProtectedRoute = ({ user, children }: any) => {
    if (!user) {
        window.location.href = '/login';
    }
    return children;
};

const AppRoutes = () => {
    const { loginData } = useAppContext();
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <Routes>
                {routes.map((route, index) => {
                    return route.isProtected ? (
                        <Route
                            key={index}
                            path="/"
                            element={<Dashboard />}>
                            <Route
                                path={route.path}
                                element={route.isProtected ? <ProtectedRoute user={
                                    loginData
                                }>{route.element}</ProtectedRoute> : route.element}
                            />
                        </Route>
                    ) : (
                        <Route
                            key={index}
                            path={route.path}
                            element={route.isProtected ? <ProtectedRoute user={
                                loginData
                            }>{route.element}</ProtectedRoute> : route.element}
                        />
                    );
                })}
            </Routes>
        </Suspense>
    );
}
export default AppRoutes;