import { createContext, useContext, useState } from 'react';
export const AuthContext = createContext<any>({});

export const useAuthContext = () => useContext(AuthContext);

const AuthProvider = ({ children }: any) => {
  const [loginData, setLoginData] = useState(null);
  console.log('auth provider ???????????????????????', loginData);
  return (
    <AuthContext.Provider value={{ loginData, setLoginData }}>
      {children}
    </AuthContext.Provider>
  )
}
export default AuthProvider;