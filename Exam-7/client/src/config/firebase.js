// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  sendPasswordResetEmail,
  signInWithPopup,

} from "firebase/auth";
import { signInWithEmailAndPassword } from "firebase/auth/cordova";

const firebaseConfig = {
  apiKey: "AIzaSyDgChvuO_qHinxJagYeFAIuIoOvzxwS7uA",
  authDomain: "api-165e0.firebaseapp.com",
  projectId: "api-165e0",
  storageBucket: "api-165e0.firebasestorage.app",
  messagingSenderId: "673359046682",
  appId: "1:673359046682:web:8b0d88957b96fb097709a3",
  measurementId: "G-Y8B91DWW8V"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

export const getGoogleAuth = async () => {
    const provider = new GoogleAuthProvider();
    return await signInWithPopup(auth, provider);
};

export const signup = async (email, password) => {
    return await createUserWithEmailAndPassword(auth, email, password);
};

export const LoggedIn = async (email, password) => {
    return await signInWithEmailAndPassword(auth, email, password);
};

export const reset = async (email) => {
    return await sendPasswordResetEmail(auth, email);
};