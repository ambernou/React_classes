// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { 
    getAuth,
    createUserWithEmailAndPassword, 
    signInWithEmailAndPassword,
    signOut
} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD3v-1TwBSF2jnh3UDuJWJP-jxhAvyOO00",
  authDomain: "gb-messenges.firebaseapp.com",
  projectId: "gb-messenges",
  storageBucket: "gb-messenges.appspot.com",
  messagingSenderId: "741193825318",
  appId: "1:741193825318:web:3ab577abb6e0f224167ae7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export const signUp = async (email, pass) => 
    await createUserWithEmailAndPassword(auth, email, pass);

export const logIn = async (email, pass) => 
    await signInWithEmailAndPassword(auth, email, pass);

export const logOut = async () => await signOut(auth);
