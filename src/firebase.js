import { initializeApp } from "firebase/app";

import firebase from "firebase/app"
import { getFirestore, collection, getDocs, doc, getDoc} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD05K_4zzxS5x7E85EvvL8ey9U_Hw7x1GE",
  authDomain: "ncaaftracker.firebaseapp.com",
  projectId: "ncaaftracker",
  storageBucket: "ncaaftracker.appspot.com",
  messagingSenderId: "568369503025",
  appId: "1:568369503025:web:8543cc275c3e162437ee10",
  measurementId: "G-H23YFPTCNH"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export default db