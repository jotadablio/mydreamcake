import React, { createContext, useState, useContext } from 'react';

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // 
  const [redirectAfterLogin, setRedirectAfterLogin] = useState(null);
  const [cartItems, setCartItems] = useState([]); //Estado do carrinho

  const login = () => {
    setIsLoggedIn(true); 
  };

  const logout = () => {
    setIsLoggedIn(false); 
    setRedirectAfterLogin(null); 
  };

  const addToCart = (item) => {
    setCartItems((prev) => [...prev, item]); // Adiciona um item ao carrinho
  };

  const getCartCount = () => {
    return cartItems.length; // Conta os itens no carrinho
  };
  
  return (
    <AuthContext.Provider
      value={{ isLoggedIn, login, logout, redirectAfterLogin, setRedirectAfterLogin, cartItems, addToCart, getCartCount, }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
