import React, { createContext, useState, useEffect } from 'react';
import { auth } from '../Components/Firebase/firebaseConfig';
import { onAuthStateChanged, signOut, setPersistence, browserLocalPersistence } from 'firebase/auth';
import { getFirestore, doc, getDoc } from 'firebase/firestore';

const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isAdmin, setIsAdmin] = useState(false);

  const ADMIN_USER_ID = 'KtaLiUYI6SZmNVLEhU1Xe8N5npJ2';

  useEffect(() => {
    const setupAuth = async () => {
      try {
        await setPersistence(auth, browserLocalPersistence);
      } catch (error) {
        console.error('Error setting persistence: ', error);
      }
    };

    setupAuth();

    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        setCurrentUser(user);
        setIsAdmin(user.uid === ADMIN_USER_ID);
      } else {
        setCurrentUser(null);
        setIsAdmin(false);
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      setCurrentUser(null);
      setIsAdmin(false);
    } catch (error) {
      console.error('Error signing out: ', error);
    }
  };

  return (
    <UserContext.Provider value={{ currentUser, setCurrentUser, loading, isAdmin, handleLogout }}>
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserProvider };
