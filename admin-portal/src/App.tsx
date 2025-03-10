import { Dashboard } from "./components/Dashboard";
import { BrowserRouter as Router } from "react-router-dom";
import { AppProvider } from './context/AppContext.tsx';
import AuthProvider from './context/AuthContext.tsx';

function App() {
  return (
    <>
      <AuthProvider>
        <AppProvider>
          <Router>
            <Dashboard />
          </Router>
        </AppProvider>
      </AuthProvider>
    </>
  )
}

export default App
