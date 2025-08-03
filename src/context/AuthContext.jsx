import React, { createContext, useContext, useState, useEffect } from 'react';
import { authAPI, authHelpers } from '../services/api';

const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('accessToken');
    const rawUser = localStorage.getItem('userData');

    try {
      if (token && rawUser && rawUser !== 'undefined') {
        const parsedUser = JSON.parse(rawUser);
        setUser(parsedUser);
        setIsAuthenticated(true);
      }
    } catch (error) {
      console.error('Failed to parse user data:', error);
      localStorage.removeItem('userData');
    }

    setLoading(false);
  }, []);

  const login = async (credentials) => {
    try {
      setLoading(true);
      const response = await authAPI.login(credentials);

      const user = response.data;
      const accessToken = user.accessToken;
      const refreshToken = user.refreshToken;

      if (!user || !accessToken) {
        throw new Error('Invalid login response');
      }

      authHelpers.setToken(accessToken);
      localStorage.setItem('refreshToken', refreshToken);
      localStorage.setItem('userData', JSON.stringify(user));
      localStorage.setItem('userRole', user.role);

      setUser(user);
      setIsAuthenticated(true);

      return { user };
    } catch (error) {
      console.error('Login error:', error);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  const signup = async (userData) => {
    try {
      setLoading(true);
      const response = await authAPI.signup(userData);
      return response;
    } catch (error) {
      console.error('Signup error:', error);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    authHelpers.logout();
    setUser(null);
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated,
        loading,
        login,
        signup,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};