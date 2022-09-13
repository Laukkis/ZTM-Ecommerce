import { initializeApp } from 'firebase/app'
import {
    getAuth,
    signInWithRedirect,
    signInWithPopup,
    GoogleAuthProvider
} from 'firebase/auth';

import {
    getFirestore,
    doc,
    getDoc,
    setDoc
} from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDwTAAXuTmNzjusghDaT_cwvtBxL-vT0cw",
    authDomain: "ztm-ecommerce-b9833.firebaseapp.com",
    projectId: "ztm-ecommerce-b9833",
    storageBucket: "ztm-ecommerce-b9833.appspot.com",
    messagingSenderId: "1089122381115",
    appId: "1:1089122381115:web:782f2a8fa20b9c9fab1b1e"
};


// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
    prompt: "select_account"
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
    const userDocRef = doc(db, 'users', userAuth.uid);

    const userSnapshot = await getDoc(userDocRef)

    //if user data not exists
    if (!userSnapshot.exists()) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt
            });
        } catch (error) {
            console.log('Error creating the user', error.message)
        }
    }

    //if user data exists
    return userDocRef;

};

