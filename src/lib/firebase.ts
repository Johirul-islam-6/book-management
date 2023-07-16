
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAEdcIBXp3tOfZEatrw85oRqjB4M-wZwpk",
  authDomain: "book-library-306e6.firebaseapp.com",
  projectId: "book-library-306e6",
  storageBucket: "book-library-306e6.appspot.com",
  messagingSenderId: "690845763572",
  appId: "1:690845763572:web:3e265073eef9aadae79ba1"
};


// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);