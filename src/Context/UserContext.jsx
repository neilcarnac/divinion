// src/contexts/UserContext.js
import React, { createContext, useState, useEffect } from 'react';
import { auth } from '../Components/Firebase/firebaseConfig';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { getFirestore, doc, getDoc } from 'firebase/firestore';

const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        sessionStorage.setItem('userUID', user.uid); // Store UID in session storage
        const db = getFirestore();
        const userDoc = await getDoc(doc(db, 'users', user.uid));
        const userData = userDoc.data();
        setIsAdmin(userData?.role === 'admin');
        setCurrentUser(user);
      } else {
        sessionStorage.removeItem('userUID'); // Remove UID from session storage
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
      sessionStorage.removeItem('userUID'); // Clear UID from session storage
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
