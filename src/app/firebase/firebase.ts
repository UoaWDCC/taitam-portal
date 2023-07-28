// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, User } from "firebase/auth"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  projectId: process.env.FIREBASE_PROJECT_ID,
  appId: process.env.FIREBASE_APP_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

//Create a new account for  the user using email and password
export function signInWithEmailAndPassword(email:any,password:any) {
  return createUserWithEmailAndPassword(auth, email, password);
}

//Logins in the user using email and password
export function loginInWithEmailAndPassword(email:any,password:any) {
}

//Signs out the user
export function SignOut() {
  return auth.signOut();
}

//Trigger a callback when user auth state changes
export function onAuthStateChangedHelper(callback: (user: User | null) => void) {
  return onAuthStateChanged(auth, callback)
}




