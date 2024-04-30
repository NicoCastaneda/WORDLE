import { initializeApp } from 'firebase/app';

// Optionally import the services that you want to use
// import {...} from "firebase/auth";
// import {...} from "firebase/database";
import {getFirestore} from "firebase/firestore";
// import {...} from "firebase/functions";
// import {...} from "firebase/storage";

// Initialize Firebase
const firebaseConfig = {
    apiKey: "AIzaSyDbI4AaLWVFaf0er57NJUot2CTHmroNpr8",
    authDomain: "wordle-788c5.firebaseapp.com",
    databaseURL: "https://wordle-788c5-default-rtdb.firebaseio.com",
    projectId: "wordle-788c5",
    storageBucket: "wordle-788c5.appspot.com",
    messagingSenderId: "415571027738",
    appId: "1:415571027738:web:38c27ed364f4248680eea3",
    measurementId: "G-D37TPKZY4L"
};

const app = initializeApp(firebaseConfig);
// For more information on how to access Firebase in your project,
// see the Firebase documentation: https://firebase.google.com/docs/web/setup#access-firebase
const db = getFirestore(app);

export default db;