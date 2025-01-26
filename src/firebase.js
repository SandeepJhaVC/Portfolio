import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyDr_tAZhEAWTY4A0_luMb5adDW8DkVRFeI",
    authDomain: "reactjs-myportfolio.firebaseapp.com",
    projectId: "reactjs-myportfolio",
    storageBucket: "reactjs-myportfolio.firebasestorage.app",
    messagingSenderId: "418395754780",
    appId: "1:418395754780:web:45c8b5f2b54ae50a47ead9"
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore()