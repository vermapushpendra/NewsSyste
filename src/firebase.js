

import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

//configuration
const firebaseConfig = {
    apiKey: "AIzaSyB5HyYCRQcTGl3whc8i98DYU5Uy7MthTyo",
    authDomain: "newsapp8484.firebaseapp.com",
    projectId: "newsapp8484",
    storageBucket: "newsapp8484.firebasestorage.app",
    messagingSenderId: "142951170255",
    appId: "1:142951170255:web:e4dfa83ccad1231241b7ba",
    measurementId: "G-SDQ9XYSZHW"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = getFirestore(app);

// Export
export { app, auth, db };

