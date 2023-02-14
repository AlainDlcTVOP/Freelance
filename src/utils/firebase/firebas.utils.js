import { initializeApp } from 'firebase/app';
import {
    getAuth,
    signInWithRedirect,
    signInWithPopup,
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged
    
} from 'firebase/auth';
import {
    getFirestore,
    doc,
    getDoc,
    setDoc
} from 'firebase/firestore';


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
export const signInGoogleWithPopup = () => signInWithPopup(auth, provider);
export const signInWithGoogleRedirect = () => signInWithRedirect(auth, provider);
export const signOutUser = async () => await signOut(auth);


const db = getFirestore();

export const createUserDocumentfromAuth = async (userAuth, additionalInformation = {
    
}) => {
    const userDocRef = doc(db, 'users', userAuth.uid);
    const userSnapshots = await getDoc(userDocRef);

    if (!userSnapshots.exists()) {
        const { displayName, email } = userAuth;
        const createAt = new Date();

        try {
            await setDoc(userDocRef, {
                displayName,
                email,
                createAt,
                ...additionalInformation,
            })
        } catch (error) {
            console.log('error creating the user', error);
        }
    }
   
    return userDocRef;  
}

export const signInAuthUserWithEmailAndPassword = async (email, password) => {
    if (!email || !password) return;
    return await signInWithEmailAndPassword(auth, email, password);
  };

export const createAuthUserWithEmailAndPassword = async (email, password) => {
    if (!email || !password) return;
   return await createUserWithEmailAndPassword(auth, email, password); 
}

export const onAuthStateChangedListener = (callback) => {
    if (!callback) return;
    onAuthStateChanged(auth, callback);
}
