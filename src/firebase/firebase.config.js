// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDvll1890HKa60tU2UGTYY4Rg9BwaKvZpQ",
  authDomain: "assignment-09-f2cee.firebaseapp.com",
  projectId: "assignment-09-f2cee",
  storageBucket: "assignment-09-f2cee.firebasestorage.app",
  messagingSenderId: "807663065785",
  appId: "1:807663065785:web:0ca14323850772eeff9968"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);