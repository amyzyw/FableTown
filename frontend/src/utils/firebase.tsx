import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


import withFirebaseAuth from 'react-with-firebase-auth';

const firebaseConfig = {
  apiKey: "AIzaSyASzrD8GnE4UgmwWqo_4GBlHNFpTcOBDLg",
  authDomain: "fabletown-1998.firebaseapp.com",
  projectId: "fabletown-1998",
  storageBucket: "fabletown-1998.appspot.com",
  messagingSenderId: "1045845898482",
  appId: "1:1045845898482:web:bf3818f96b71dfafc60c6b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


const auth = getAuth(app);
const db = getFirestore(app);

const providers = {
  googleProvider: new GoogleAuthProvider(),
};

const createComponentWithAuth = withFirebaseAuth({
  providers,
  firebaseAppAuth: auth,
});

const signInWithGoogle = () => {
  signInWithPopup(auth, providers.googleProvider);
};

const signOutFirebase = () => {
  signOut(auth);
};

export {
  db,
  auth,
  createComponentWithAuth,
  signInWithGoogle,
  signOutFirebase as signOut,
};