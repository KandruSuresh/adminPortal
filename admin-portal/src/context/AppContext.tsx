import React from 'react';
import { createContext } from 'react';

export const AppContext = createContext({} as any);

export const AppProvider = ({ children }: any) => {
  const [sidebarOpen, setSidebarOpen] = React.useState(true);
  return (
    <AppContext.Provider value={{ sidebarOpen, setSidebarOpen }}>
      {children}
    </AppContext.Provider>
  )
}