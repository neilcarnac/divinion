import React, { useState, useEffect, useContext } from 'react';
import { db } from '../Firebase/firebaseConfig';
import { collection, query, where, getDocs } from 'firebase/firestore';
import { UserContext } from '../../Context/UserContext';
import { useNavigate } from 'react-router-dom';
import { signOut, signInWithEmailAndPassword } from 'firebase/auth';

const Chart = () => {
  const { currentUser, handleLogout } = useContext(UserContext);
  const [userEmail, setUserEmail] = useState('');
  const [companyName, setCompanyName] = useState('');
  const toggleDrawer = () => {
    setOpen(!open);
  };
  const navigate = useNavigate();

  const onLogoutClick = async () => {
    try {
      await handleLogout();
      navigate('/'); // Redirect to login page
    } catch (error) {
      console.error('Logout error:', error);
    }
  };
  const onAboutClick = async () => {
    try {
      navigate('/about'); // Redirect to login page
    } catch (error) {
      console.error('about traversal:', error);
    }
  }

  const onHomeClick = async () => {
    try {
      navigate('/'); // Redirect to login page
    } catch (error) {
      console.error('about traversal:', error);
    }
  }

  const onNewsClick = async () => {
    try {
      navigate('/blog'); // Redirect to login page
    } catch (error) {
      console.error('about traversal:', error);
    }
  }
  // useEffect(() => {
  //   const fetchBusinessUserEmail = async () => {
  //     if (currentUser && currentUser.uid) {
  //       try {
  //         const q = query(
  //           collection(db, 'Admin/Business-Users/BusinessUsers'),
  //           where('uid', '==', currentUser.uid)
  //         );
  //         const querySnapshot = await getDocs(q);
  //         if (!querySnapshot.empty) {
  //           querySnapshot.forEach((doc) => {
  //             const data = doc.data();
  //             setUserEmail(data.email);
  //             setCompanyName(data.companyName);
  //           });
  //         } else {
  //           console.log('No such user document!');
  //         }
  //       } catch (error) {
  //         console.error('Error fetching business user: ', error);
  //       }
  //     }
  //   };

  //   fetchBusinessUserEmail();
  // }, [currentUser]);

  return (
    <>
      <div className="flex flex-row justify-between m-5">
        <div className="flex flex-col items-start justify-between">
          <p className='font-semibold text-xl'>Welcome Back Admin!</p>
          <p>These are all the Panels you can Edit</p>
          <button className="bg-blue-800 hover:bg-blue-900  transition: duration-300 text-white text-base p-3 rounded-md" onClick={onLogoutClick} >
            Log Out Of Admin Panel
          </button>
        </div>
        <div className="flex flex-col items-end gap-2">

          <button className="bg-green-700 w-64 text-center hover:bg-green-700/80 transition: duration-300 text-white text-base p-3 rounded-md" onClick={onAboutClick} >
            Check About Page to add Info
          </button>
          <button className="bg-green-700 w-64 text-center hover:bg-green-700/80 transition: duration-300 text-white text-base p-3 rounded-md" onClick={onHomeClick} >
            Check Home Page to add Info
          </button>
          <button className="bg-green-700 w-64 text-center hover:bg-green-700/80 transition: duration-300 text-white text-base p-3 rounded-md" onClick={onNewsClick} >
            Check News Page to add Info
          </button>

        </div>
      </div>
    </>
  );
};

export default Chart;
