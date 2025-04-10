import { useQuery } from '@tanstack/react-query';
import React, { createContext, useContext, useState, useEffect } from 'react';
import { GoogleCheckAuth } from '~/apis/auth';
import type { User } from '~/apis/types/auth.type';

interface UserContextType {
  isLoggedIn: boolean;
  user: any;
  setUser: (user: any) => void;
  isLoading: boolean;
}

const UserContext = createContext<UserContextType>({
  isLoggedIn: false,
  user: null,
  setUser: () => {},
  isLoading: false,
});

export const useUser = () => useContext(UserContext);

export const UserProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState<User | null>(null);

  // Use the query without callbacks
  const { data, error, isLoading } = useQuery({
    queryKey: ['user'],
    queryFn: GoogleCheckAuth,
  });

  // Handle the response in a useEffect
  useEffect(() => {
    if (error) {
      setIsLoggedIn(false);
      setUser(null);
      console.error(error);
    } else if (data) {
      setIsLoggedIn(data.success);
      setUser(data.user);
    }
  }, [data, error]);

  return (
    <UserContext.Provider value={{ isLoggedIn, user, setUser, isLoading }}>
      {children}
    </UserContext.Provider>
  );
};