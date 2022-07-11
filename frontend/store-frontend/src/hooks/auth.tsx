import React, { createContext, useCallback, useContext, useState } from 'react';
import api from '../services/api';

interface AuthState {
  token: string;
  user: object;
}

interface SignUpCredentials {
  name: string;
  email: string;
  password: string;
}

interface SignInCredentials {
  email: string;
  password: string;
}

interface AuthContextData {
  user: object;
  signUp(credentials: SignUpCredentials): Promise<void>;
  signIn(credentials: SignInCredentials): Promise<void>;
  signOut(): void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

const AuthProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<AuthState>(() => {
    const token = localStorage.getItem('@Store:token');
    const user = localStorage.getItem('@Store:user');

    if (token && user) {
      api.defaults.headers.authorization = `Bearer ${token}`;
      return {
        token,
        user: JSON.parse(user),
      };
    }

    return {} as AuthState;
  });

  const signIn = useCallback(async ({ email, password }) => {
    const response = await api.post('v1/auth/login', { email, password });
    const { token, user } = response.data;
    localStorage.setItem('@Store:token', token);
    localStorage.setItem('@Store:user', JSON.stringify(user));
    api.defaults.headers.authorization = `Bearer ${token}`;
    setData({ token, user });
  }, []);

  const signOut = useCallback(() => {
    localStorage.removeItem('@Store:token');
    localStorage.removeItem('@Store:user');
    setData({} as AuthState);
  }, []);

  const signUp = useCallback(
    async ({ name, email, password }) => {
      await api.post('v1/users/create', {
        name,
        email,
        password,
      });
      await signIn({ email, password });
    },
    [signIn],
  );

  return (
    <AuthContext.Provider value={{ user: data.user, signUp, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

function useAuth(): AuthContextData {
  const context = useContext(AuthContext);

  if (!context) {
    throw Error('useAuth must be used within an AuthProvider');
  }

  return context;
}

export { AuthProvider, useAuth };
