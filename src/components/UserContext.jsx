// UserContext.jsx
import React, { createContext, useState, useEffect } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // Load user from localStorage once on mount
  useEffect(() => {
    try {
      const raw = localStorage.getItem("user");
      if (!raw || raw === "undefined") {
        setUser(null);
      } else {
        setUser(JSON.parse(raw));
      }
    } catch {
      setUser(null);
    }
  }, []);

  // Update user in context and localStorage
  const updateUser = (userData) => {
    if (userData) {
      localStorage.setItem("user", JSON.stringify(userData));
      setUser(userData);
    } else {
      localStorage.removeItem("user");
      setUser(null);
    }
  };

  return (
    <UserContext.Provider value={{ user, updateUser }}>
      {children}
    </UserContext.Provider>
  );
};
