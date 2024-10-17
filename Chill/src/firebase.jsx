// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBh8mhl7qYo9d-EXU5vOWTlnAUf3QW5PKc",
  authDomain: "bootcamp-44391.firebaseapp.com",
  projectId: "bootcamp-44391",
  storageBucket: "bootcamp-44391.appspot.com",
  messagingSenderId: "1045209266625",
  appId: "1:1045209266625:web:c75a4dd2430a36db00d740",
  measurementId: "G-12JTX3PHQZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export const auth = getAuth(app);
export default db;