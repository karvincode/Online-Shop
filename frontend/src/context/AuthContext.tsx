import React, { createContext, useState, ReactNode, useEffect } from 'react';

interface AuthContextType {
  isLoggedIn: boolean;
  login: () => void;
  logout: () => void;
  loggedinUsername: string;
  loggedinEmail: string;
  setloggedinUsername: (loggedinUsername: string) => void;
  setloggedinEmail: (loggedinEmail: string) => void;
}

export const AuthContext = createContext<AuthContextType>({
  isLoggedIn: false,
  login: () => {},
  logout: () => {},
  loggedinUsername: '',
  loggedinEmail: '',
  setloggedinUsername: () => {},
  setloggedinEmail: () => {},
});

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loggedinUsername, setloggedinUsername] = useState('');
  const [loggedinEmail, setloggedinEmail] = useState('');

  useEffect(() => {
    const storedLoginStatus = localStorage.getItem('isLoggedIn');
    const storedUsername = localStorage.getItem('username') || '';
    const storedEmail = localStorage.getItem('email') || '';

    setIsLoggedIn(storedLoginStatus === 'true');
    setloggedinUsername(storedUsername);
    setloggedinEmail(storedEmail);
  }, []);

  const login = () => {
    setIsLoggedIn(true);
    localStorage.setItem('isLoggedIn', 'true');
    localStorage.setItem('username', loggedinUsername);
    localStorage.setItem('email', loggedinEmail);
  };

  const logout = () => {
    setIsLoggedIn(false);
    localStorage.setItem('isLoggedIn', 'false');
    localStorage.setItem('username', '');
    localStorage.setItem('email', '');
  };

  const authContextValue: AuthContextType = {
    isLoggedIn,
    login,
    logout,
    loggedinUsername,
    loggedinEmail,
    setloggedinUsername,
    setloggedinEmail,
  };

  return <AuthContext.Provider value={authContextValue}>{children}</AuthContext.Provider>;
};