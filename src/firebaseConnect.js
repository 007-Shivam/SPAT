// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD5kW2qk6HsMnhz-N3_oaSbLtwPLA19T1Q",
  authDomain: "spat-eb9c1.firebaseapp.com",
  projectId: "spat-eb9c1",
  storageBucket: "spat-eb9c1.firebasestorage.app",
  messagingSenderId: "57430519888",
  appId: "1:57430519888:web:346d312bbf0498514ca155",
  measurementId: "G-WFFBV20EGN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const storage = getStorage(app);
const db = getFirestore(app);

export { auth, storage, db };