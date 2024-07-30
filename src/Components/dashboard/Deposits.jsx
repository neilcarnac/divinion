import React, { useState, useEffect } from 'react';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import Title from './Title';
import { db } from '../Firebase/firebaseConfig'; // Import your Firebase setup
import { doc, getDoc, setDoc } from 'firebase/firestore';

function preventDefault(event) {
  event.preventDefault();
}

const Deposits = () => {
  const [aum, setAum] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [newAum, setNewAum] = useState('');

  useEffect(() => {
    const fetchAum = async () => {
      const docRef = doc(db, 'aum', 'currentAUM');
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setAum(docSnap.data().amount);
      } else {
        console.log('No such document!');
      }
    };

    fetchAum();
  }, []);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = async () => {
    const docRef = doc(db, 'aum', 'currentAUM');
    await setDoc(docRef, { amount: parseFloat(newAum) });
    console.log(aum)
    setAum(parseFloat(newAum));
    setIsEditing(false);
  };

  const handleChange = (e) => {
    setNewAum(e.target.value);

  };

  return (
    <>
      <Title>Current AUM</Title>
      <Typography component="p" variant="h5">
        {aum !== null ? `₹${aum.toFixed(2)}` : ''}
      </Typography>
      <div>
        {isEditing ? (
          <>
            <input
              type="number"
              value={newAum}
              onChange={handleChange}
              className="p-2 border"
            />
            <button
              onClick={handleSaveClick}
              className="p-2 bg-green-600 text-white"
            >
              Save
            </button>
          </>
        ) : (
          <button
            onClick={handleEditClick}
            className="p-2 bg-blue-600 text-white"
          >
            Edit
          </button>
        )}
      </div>
    </>
  );
}

export default Deposits;
