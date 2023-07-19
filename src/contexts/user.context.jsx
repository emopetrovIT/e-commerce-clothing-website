import { createContext, useState, useEffect } from 'react';
import { onAuthStateChangedListener } from '../utils/firebase/firebase.utils';

// as the actual default value you want to access, not nessesary initial
export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => null,
});

export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const value = { currentUser, setCurrentUser };

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
      console.log(user);

      return unsubscribe;
    }, []);
  });

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};