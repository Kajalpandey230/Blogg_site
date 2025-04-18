// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-c9070.firebaseapp.com",
  projectId: "mern-blog-c9070",
  storageBucket: "mern-blog-c9070.appspot.com",
  messagingSenderId: "98030640804",
  appId: "1:98030640804:web:9bbc6414fa69a89003d031",
  measurementId: "G-WLC0N44V30"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

