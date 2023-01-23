import { initializeApp } from 'firebase/app';
import {
    getAuth,
    signInWithRedirect,
    signInWithPopup,
    GoogleAuthProvider
} from 'firebase/auth';


const firebaseConfig = {
    apiKey: "AIzaSyDmczKAXSTumnUl-8FfggkRXPdT2_vSv7I",
    authDomain: "freelance-db-bca9c.firebaseapp.com",
    projectId: "freelance-db-bca9c",
    storageBucket: "freelance-db-bca9c.appspot.com",
    messagingSenderId: "17047628738",
    appId: "1:17047628738:web:7674afd55cd6108515845b"
  };
  
  // Initialize Firebase
const app = initializeApp(firebaseConfig);
  
const provider = new GoogleAuthProvider();
provider.setCustomParameters({
    prompt: 'select_account'
});

export const auth = getAuth();

export const signInGoogleWithPopup = () => signInWithPopup(auth,provider);