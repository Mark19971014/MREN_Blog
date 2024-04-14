// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-61621.firebaseapp.com",
  projectId: "mern-blog-61621",
  storageBucket: "mern-blog-61621.appspot.com",
  messagingSenderId: "717272982696",
  appId: "1:717272982696:web:b45fa6a4ed8b76140fce9d"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);