// firebase.js

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from 'firebase/storage';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDxZDItqR75XkxUCe3XfxZ023P1r7OikIA",
  authDomain: "divinion.firebaseapp.com",
  projectId: "divinion",
  storageBucket: "divinion.appspot.com",
  messagingSenderId: "776680580421",
  appId: "1:776680580421:web:68a361947534db3a0a4a2c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);

export { db, auth, storage };
