import React, { useState, useEffect, useContext } from 'react';
import { db } from '../Firebase/firebaseConfig';
import { collection, query, where, getDocs } from 'firebase/firestore';
import { UserContext } from '../../Context/UserContext';

const Chart = () => {
  const { currentUser } = useContext(UserContext); // Get current user from context
  const [userEmail, setUserEmail] = useState('');
  const [companyName, setCompanyName] = useState('');
  useEffect(() => {
    const fetchBusinessUserEmail = async () => {
      if (currentUser && currentUser.uid) {
        try {
          const q = query(
            collection(db, 'Admin/Business-Users/BusinessUsers'),
            where('uid', '==', currentUser.uid)
          );
          const querySnapshot = await getDocs(q);
          if (!querySnapshot.empty) {
            querySnapshot.forEach((doc) => {
              const data = doc.data();
              setUserEmail(data.email);
              setCompanyName(data.companyName);
            });
          } else {
            console.log('No such user document!');
          }
        } catch (error) {
          console.error('Error fetching business user: ', error);
        }
      }
    };

    fetchBusinessUserEmail();
  }, [currentUser]);

  return (
    <>
      {/* <p className='text-lg'>User is working in {companyName}</p> */}
    </>
  );
};

export default Chart;
