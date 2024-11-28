// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCkHRBM0adrBA84rAtAZU4tnNGo9Ap4Iog",
  authDomain: "rihanshoping.firebaseapp.com",
  projectId: "rihanshoping",
  storageBucket: "rihanshoping.firebasestorage.app",
  messagingSenderId: "875299491985",
  appId: "1:875299491985:web:4f7dcfd07f2dc92e846f30"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)