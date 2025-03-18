import { ErrorBoundary } from "react-error-boundary";
import { Outlet } from "react-router-dom";
import ErrorFallback from "./ErrorFallback";
import Sidebar from "./Sidebar";

const BaseLayout = () => {
    return (
        <ErrorBoundary FallbackComponent={ErrorFallback}>
            <Sidebar />
            <Outlet />
        </ErrorBoundary>
    )
};

export default BaseLayout;

/*
// import ErrorBoundary from "../../components/error-boundary";
import { ErrorBoundary } from "react-error-boundary";
import ErrorFallback from "./ErrorFallback";
import { lazy } from "react";
// const Header = lazy(() => import("@components/header"));
// const Sidebar = lazy(() => import("../../components/sidebar"));
const Sidebar = lazy(() => import("../components/Sidebar"));
interface BaseLayoutProps {
    children?: React.ReactNode;
    user?: Record<string, unknown>;
}

export default function BaseLayout(props: BaseLayoutProps) {
    console.log('BaseLayout', props);
    const { children } = props;
    // common things we need to show on each page like Header,sidebar ,Footer
    return (
        <ErrorBoundary FallbackComponent={ErrorFallback}>
            <div className="wrapper">
                <div className="d-flex position-relative">
                    <Sidebar loginData={undefined} sidebarOpen={true} />
                    <main className="main-container">
                       
                        {children}
                    </main>
                </div>
            </div>
        </ErrorBoundary>
    );
}

BaseLayout.defaultProps = {
    children: [],
    user: {},
};
*/
/*

import { Outlet, Link } from "react-router-dom";

const BaseLayout = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/blogs">Blogs</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  )
};

export default BaseLayout;

*/