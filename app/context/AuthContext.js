import React, { createContext, useState, useContext } from 'react';

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // 
  const [redirectAfterLogin, setRedirectAfterLogin] = useState(null); 

  const login = () => {
    setIsLoggedIn(true); 
  };

  const logout = () => {
    setIsLoggedIn(false); 
    setRedirectAfterLogin(null); 
  };

  return (
    <AuthContext.Provider
      value={{ isLoggedIn, login, logout, redirectAfterLogin, setRedirectAfterLogin }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
