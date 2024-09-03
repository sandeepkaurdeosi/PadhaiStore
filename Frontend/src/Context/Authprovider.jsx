
// import React, { createContext, useContext, useState } from "react";
import React, { createContext, useContext, useState, useEffect } from 'react';

// Create the AuthContext
export const AuthContext = createContext();

// Create the AuthProvider component
export default function AuthProvider({ children }) {
  const [authUser, setAuthUser] = useState(null);

  // Load initial auth user from localStorage
  useEffect(() => {
    const initialAuthUser = localStorage.getItem("Users");
    if (initialAuthUser) {
      setAuthUser(JSON.parse(initialAuthUser));
    }
  }, []);

  // Update localStorage whenever authUser changes
  useEffect(() => {
    if (authUser) {
      localStorage.setItem("Users", JSON.stringify(authUser));
    } else {
      localStorage.removeItem("Users");
    }
  }, [authUser]);

  return (
    <AuthContext.Provider value={[authUser, setAuthUser]}>
      {children}
    </AuthContext.Provider>
  );
}

// Custom hook to use the AuthContext
// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = () => useContext(AuthContext);
