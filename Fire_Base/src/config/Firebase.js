// Import Firebase SDKs
import { initializeApp } from "firebase/app";
import {
    getAuth,
    GoogleAuthProvider,
    signInWithPopup,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    sendPasswordResetEmail,
} from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

// Firebase Configuration
const firebaseConfig = {
    apiKey: "AIzaSyBLFUyh5r7Wb9vEWYu1bX9XF1FIVvKD_-8",
    authDomain: "authentication-b962b.firebaseapp.com",
    projectId: "authentication-b962b",
    storageBucket: "authentication-b962b.firebasestorage.app",
    messagingSenderId: "134729104136",
    appId: "1:134729104136:web:2e6075987f5ff4313e0abd",
    measurementId: "G-CQ29H7E297"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
export const db = getFirestore(app);

export const getGoogleAuth = async () => {
    const provider = new GoogleAuthProvider();
    try {
        // const result = await signInWithPopup(auth, provider);
        // return result.user;
        return await signInWithPopup(auth, provider);
    } catch (error) {
        console.error("Google Sign-In Error:", error.message);
        throw error;
    }
};

export const signup = async (email, password) => {
    try {
        // const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        // return userCredential.user;
        return await createUserWithEmailAndPassword(auth, email, password);
    } catch (error) {
        console.error("Signup Error:", error.message);
        throw error;
    }
};

export const login = async (email, password) => {
    try {
        // const userCredential = await signInWithEmailAndPassword(auth, email, password);
        // return userCredential.user;
        return await signInWithEmailAndPassword(auth, email, password);

    } catch (error) {
        console.error("Login Error:", error.message);
        throw error;
    }
};

export const resetPassword= async (email) => {
    try {
        await sendPasswordResetEmail(auth, email);
        return "Password reset email sent!";
    } catch (error) {
        console.error("Password Reset Error:", error.message);
        throw error;
    }
};

export { auth };