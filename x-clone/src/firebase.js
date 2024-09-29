// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY ,
  authDomain: "x-clone-2d318.firebaseapp.com",
  projectId: "x-clone-2d318",
  storageBucket: "x-clone-2d318.appspot.com",
  messagingSenderId: "7911962240",
  appId: "1:7911962240:web:5804827b88764755dcd865",
  measurementId: "G-JY8Q4H4CEG"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);