// src/firebase.js
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyA-LAw6h6t-_cBqaySJ1eTeJjDPPLum_0c",  
  authDomain: "cbramon-7d2b9.firebaseapp.com",       
  projectId: "cbramon-7d2b9",                       
  storageBucket: "cbramon-7d2b9.appspot.com",      
  messagingSenderId: "706797450787",                 
  appId: "1:706797450787:web:your_app_id",           
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
