// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBXaMBq-LDBVmnDeH4sjqzyI-LT0Oh00bc",
  authDomain: "netflixgpt-9ea1e.firebaseapp.com",
  projectId: "netflixgpt-9ea1e",
  storageBucket: "netflixgpt-9ea1e.firebasestorage.app",
  messagingSenderId: "824536994555",
  appId: "1:824536994555:web:df967174be2fb23a8f165e",
  measurementId: "G-H7S3BNFFMK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();