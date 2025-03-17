import { useState } from 'react';
import { createContext, useContext } from 'react';

export const AppContext = createContext<any>({});
export const useAppContext = () => useContext(AppContext);

export const AppProvider = ({ children }: any) => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [loginData, setLoginData] = useState(null);
  return (
    <AppContext.Provider value={{ sidebarOpen, setSidebarOpen, loginData, setLoginData }}>
      {children}
    </AppContext.Provider>
  )
}