import React, { createContext, useState, useContext } from 'react';

const AuthContext = createContext();

export function AuthProvider ({ children }) {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    return (
        <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
          {children}
        </AuthContext.Provider>
      );
}

// Hook para acessar o contexto
export function useAuth() {
    return useContext(AuthContext);
  }