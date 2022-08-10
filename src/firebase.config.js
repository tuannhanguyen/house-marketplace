import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyCrVzkpxdE24ewlmaF-9Hovx5RA0c56nq4",
  authDomain: "house-marketplace-app-75d9d.firebaseapp.com",
  projectId: "house-marketplace-app-75d9d",
  storageBucket: "house-marketplace-app-75d9d.appspot.com",
  messagingSenderId: "173431572111",
  appId: "1:173431572111:web:7166e25385cbec566492fa"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore()