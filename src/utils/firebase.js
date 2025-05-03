// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBXqf7kR_Ln9Ok8wjtLwTIHiEjQv0PH3qQ",
  authDomain: "sso-login-dd184.firebaseapp.com",
  projectId: "sso-login-dd184",
  storageBucket: "sso-login-dd184.firebasestorage.app",
  messagingSenderId: "203244896782",
  appId: "1:203244896782:web:0e43645949b01cbd2fb25f",
  measurementId: "G-DY6SFRX19Z",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export default app;
