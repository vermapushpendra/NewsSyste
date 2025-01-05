

// src/firebase.js
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth'; // For Authentication
import { getFirestore } from 'firebase/firestore'; // For Firestore

// Your Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB5HyYCRQcTGl3whc8i98DYU5Uy7MthTyo",
    authDomain: "newsapp8484.firebaseapp.com",
    projectId: "newsapp8484",
    storageBucket: "newsapp8484.firebasestorage.app",
    messagingSenderId: "142951170255",
    appId: "1:142951170255:web:e4dfa83ccad1231241b7ba",
    measurementId: "G-SDQ9XYSZHW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase services
const auth = getAuth(app);  // Firebase Authentication
const db = getFirestore(app);  // Firestore

// Exporting the services
export { app, auth, db };  // Now exporting the app object correctly

