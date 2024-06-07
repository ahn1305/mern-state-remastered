// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDK36hPRb8qrnxBh4uR0B4BUGMrysbwqVA",
  authDomain: "test-a24ed.firebaseapp.com",
  projectId: "test-a24ed",
  storageBucket: "gs://test-a24ed.appspot.com",
  messagingSenderId: "282598073889",
  appId: "1:282598073889:web:252b37d0ecd21bfb61a560"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
