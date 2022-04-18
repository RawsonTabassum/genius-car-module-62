// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA5oxomPjXQbnWKa8BSmPpsTAKr-Loqa1o",
  authDomain: "genius-car-services-f0de9.firebaseapp.com",
  projectId: "genius-car-services-f0de9",
  storageBucket: "genius-car-services-f0de9.appspot.com",
  messagingSenderId: "372422934281",
  appId: "1:372422934281:web:e9d35149c5a10e8def1dd8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;