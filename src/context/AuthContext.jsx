import { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  // Leemos localStorage para saber si el usuario ya estaba logueado al recargar
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    return localStorage.getItem("isLoggedIn") === "true";
  });

  const login = () => {
    setIsAuthenticated(true);
    localStorage.setItem("isLoggedIn", "true");
    window.history.pushState({}, "", "/home");
    window.dispatchEvent(new PopStateEvent("popstate"));
  };

  const logout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem("isLoggedIn");
    window.history.pushState({}, "", "/login");
    window.dispatchEvent(new PopStateEvent("popstate"));
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);