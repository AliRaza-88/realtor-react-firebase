// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyATsKky96fpS1WVXsuhjRFt10dJXi6MrgM",
  authDomain: "realtor-react-3b9c5.firebaseapp.com",
  projectId: "realtor-react-3b9c5",
  storageBucket: "realtor-react-3b9c5.appspot.com",
  messagingSenderId: "499776789461",
  appId: "1:499776789461:web:bb7ae7f93063290953bb5c"
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore();