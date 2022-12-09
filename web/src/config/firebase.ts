// Import the functions you need from the SDKs you need
import { FirebaseApp, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAbiG59gN3cJmviCfY5_cJCInO98J9YeyM",
  authDomain: "uploadimages-f8c1a.firebaseapp.com",
  projectId: "uploadimages-f8c1a",
  storageBucket: "uploadimages-f8c1a.appspot.com",
  messagingSenderId: "894926581454",
  appId: "1:894926581454:web:69cebef553220cbf09ea9f",
  measurementId: "G-N58M5K6P44"
};

export const app = initializeApp(firebaseConfig);
export const storage = getStorage(app)
export const db = getFirestore(app);


