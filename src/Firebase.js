// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBGQQXU5IUdYsRTIZluYLWnRFrO1Tbyios",
  authDomain: "aqueous-radio-368114.firebaseapp.com",
  projectId: "aqueous-radio-368114",
  storageBucket: "aqueous-radio-368114.appspot.com",
  messagingSenderId: "915265365938",
  appId: "1:915265365938:web:cdb5f86a020563844fa6ab",
  measurementId: "G-4MJLM793HX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;