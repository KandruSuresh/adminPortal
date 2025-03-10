import { createContext, useState } from 'react';
export const AuthContext = createContext({} as any);

const AuthProvider = ({ children }: any) => {
  const [loginData, setLoginData] = useState(null);
  return (
    <AuthContext.Provider value={{ loginData, setLoginData }}>
      {children}
    </AuthContext.Provider>
  )
}
// export const useAuth = () => useContext(AuthContext); // Custom hook to access context
export default AuthProvider;