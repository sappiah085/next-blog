// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getDatabase } from "firebase/database";
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: "blog-5ee6b.firebaseapp.com",
  projectId: "blog-5ee6b",
  storageBucket: "blog-5ee6b.appspot.com",
  databaseURL: "https://blog-5ee6b-default-rtdb.firebaseio.com",
  messagingSenderId: "901162016556",
  appId: "1:901162016556:web:25b82ba7950aeff9b75689",
  measurementId: "G-JM65YY1JE9",
};

const appFirebase = initializeApp(firebaseConfig);
export const database = getDatabase(appFirebase);
export const db = getFirestore(appFirebase);
