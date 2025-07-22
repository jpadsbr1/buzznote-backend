// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCaZo8ZbqSSH4yR9ltc1seZVOLlYVAFnq0",
  authDomain: "buzznote-7cd95.firebaseapp.com",
  projectId: "buzznote-7cd95",
  storageBucket: "buzznote-7cd95.firebasestorage.app",
  messagingSenderId: "1087790840110",
  appId: "1:1087790840110:web:58578c5ecd077b0928a2bf",
  measurementId: "G-HSN65R5MG5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const analytics = getAnalytics(app);