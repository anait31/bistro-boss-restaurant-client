// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_apiKey,
  authDomain: import.meta.env.VITE_authDomain,
  projectId: import.meta.env.VITE_projectId,
  storageBucket: import.meta.env.VITE_storageBucket,
  messagingSenderId: import.meta.env.VITE_messagingSenderId,
  appId: import.meta.env.VITE_appId
//   apiKey: "AIzaSyC7QWR0nap15k0gfLroYJo5tu57TKi-WAk",
//   authDomain: "bistro-boss-restaurant-kl.firebaseapp.com",
//   projectId: "bistro-boss-restaurant-kl",
//   storageBucket: "bistro-boss-restaurant-kl.firebasestorage.app",
//   messagingSenderId: "579681443188",
//   appId: "1:579681443188:web:0ce865dbd43d17e15d6021",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;