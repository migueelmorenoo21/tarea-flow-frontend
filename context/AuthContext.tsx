import React, { createContext, useContext, useState, useEffect } from 'react';
import { getToken, saveToken, deleteToken } from '../lib/auth/token';
import { useRouter } from 'expo-router';

type AuthContextType = {
  token: string | null;
  login: (token: string) => Promise<void>;
  logout: () => Promise<void>;
  isAuthenticated: boolean;
};

const AuthContext = createContext<AuthContextType | null>(null);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [token, setToken] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    getToken().then((storedToken) => {
      if (storedToken) setToken(storedToken);
    });
  }, []);

  const login = async (newToken: string) => {
    await saveToken(newToken);
    setToken(newToken);
    router.replace('/tableros');
  };

  const logout = async () => {
    await deleteToken();
    setToken(null);
    router.replace('/login');
  };

  return (
    <AuthContext.Provider value={{ token, login, logout, isAuthenticated: !!token }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) throw new Error('useAuth debe usarse dentro de AuthProvider');
  return context;
}
