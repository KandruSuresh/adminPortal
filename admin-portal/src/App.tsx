import { BrowserRouter as Router } from "react-router-dom";
import { AppProvider } from './context/AppContext';
import AppRoutes from "./router/AppRoutes";
import { ErrorBoundary } from "react-error-boundary";
import ErrorFallback from "./components/ErrorFallback";

function App() {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <AppProvider>
        <Router>
          <AppRoutes />
        </Router>
      </AppProvider>
    </ErrorBoundary>
  )
}

export default App