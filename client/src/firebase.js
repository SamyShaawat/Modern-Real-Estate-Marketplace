// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: "real-estate-market-place-9f216.firebaseapp.com",
    projectId: "real-estate-market-place-9f216",
    storageBucket: "real-estate-market-place-9f216.appspot.com",
    messagingSenderId: "42400099947",
    appId: "1:42400099947:web:cd11f27201ae0f84ee0b2e"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);