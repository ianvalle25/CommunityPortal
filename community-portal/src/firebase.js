// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDA4KL_cU532fCpjpEGlYSMbZGQ3cXKJR4",
  authDomain: "communityportal-f95b2.firebaseapp.com",
  projectId: "communityportal-f95b2",
  storageBucket: "communityportal-f95b2.firebasestorage.app",
  messagingSenderId: "64383214208",
  appId: "1:64383214208:web:3d7e568f39f47d3a6fbc65"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth=getAuth();
export default app;