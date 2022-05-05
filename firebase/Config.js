// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';
import {getAuth} from 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBODOuSu0IUEQImOpdmz9Hve9RqBEw3tAs",
  authDomain: "reactmorty.firebaseapp.com",
  projectId: "reactmorty",
  storageBucket: "reactmorty.appspot.com",
  messagingSenderId: "37482049622",
  appId: "1:37482049622:web:6876df8584d3f83d640bf7",
  measurementId: "G-P10BYV6FC7"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app)