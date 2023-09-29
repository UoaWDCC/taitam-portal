// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, User } from "firebase/auth"
import {getFirestore, collection, addDoc} from 'firebase/firestore';
import DbUser from "../user";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN ,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID ,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

//Create a new account for  the user using email and password
export function createWithEmailAndPassword(email:any,password:any) {
  return createUserWithEmailAndPassword(auth, email, password);
}

//Logins in the user using email and password
export function signWithEmailAndPassword(email:any,password:any) {
  return signInWithEmailAndPassword(auth,email,password)
}

//Signs out the user
export function SignOut() {
  return auth.signOut();
}

//Trigger a callback when user auth state changes
export function onAuthStateChangedHelper(callback: (user: User | null) => void) {
  return onAuthStateChanged(auth, callback)
}

//Stores the newly created user information on firestore
export function createUser(data: DbUser) {
  const userCollectionRef = collection(db,"users")
  return addDoc(userCollectionRef,data)
} 