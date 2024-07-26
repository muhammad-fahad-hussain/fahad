// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore, collection, addDoc } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCSLXzNXr7aYgU7A2aZ8h3mau5JTJ_xAYs",
  authDomain: "protfolio-c3a74.firebaseapp.com",
  projectId: "protfolio-c3a74",
  storageBucket: "protfolio-c3a74.appspot.com",
  messagingSenderId: "1051199643900",
  appId: "1:1051199643900:web:606e3f2537cbb6f583b779",
  measurementId: "G-YWJKXCFF3M"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

export { db, analytics };
