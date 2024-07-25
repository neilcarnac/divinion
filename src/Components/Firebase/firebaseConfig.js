// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  // apiKey: process.env.local.REACT_APP_FIREBASE_KEY,
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

export { db, auth } ;
