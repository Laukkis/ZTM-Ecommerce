import { initializeApp } from 'firebase/app'
import {
    getAuth,
    signInWithRedirect,
    signInWithPopup,
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged,
} from 'firebase/auth';

import {
    getFirestore,
    doc,
    getDoc,
    setDoc,
    collection,
    query,
    getDocs,
    updateDoc,
    arrayUnion,
    arrayRemove,
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

const GoogleProvider = new GoogleAuthProvider();
GoogleProvider.setCustomParameters({
    prompt: "select_account"
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, GoogleProvider);
export const signInWithGoogleRedirect = () => signInWithRedirect(auth, GoogleProvider);

export const db = getFirestore();


/* This is not used after submiting all data to firestore 
export const AddCollectionAndDocumentes = async (collectionKey, objectstoAdd) => {
    const collectionRef = collection(db, collectionKey);
    const batch = writeBatch(db);

    objectstoAdd.forEach((object) => {
        const docRef = doc(collectionRef, object.title.toLowerCase());
        batch.set(docRef, object);
    })

    await batch.commit();
    console.log('done');
}; */

export const getCategoriesAndDocuments = async () => {
    const collectionRef = collection(db, 'categories');
    const q = query(collectionRef);

    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map(docSnapshot => docSnapshot.data());

}

export const getFavoritesAndDocuments = async () => {
    const user = auth.currentUser
    const uid = user.uid

    const docRef = doc(db, 'favorites', uid);
    const docSnap = await getDoc(docRef);
    return docSnap.data()
}

export const setFavoritesAndDocuments = async (name, imageUrl, price, id) => {
    const user = auth.currentUser
    const uid = user.uid

    const docRef = doc(db, "favorites", uid);
    const userSnapshot = await getDoc(docRef)

    if (!userSnapshot.exists()) {
        try {
            await setDoc(docRef, {
                name, imageUrl, price, id
            });
        } catch (error) {
            console.log('Error creating the favorite', error.message)
        }
    }

    try {
        await updateDoc(docRef, {
            items: arrayUnion({
                name, imageUrl, price, id
            })
        });
    } catch (error) {
        console.log('Error adding to favorites', error.message)
    }
}

export const removeFavoritesObject = async (itemToRemove) => {
    const user = auth.currentUser
    const uid = user.uid

    const docRef = doc(db, "favorites", uid);

    try {
        await updateDoc(docRef, {
            items: arrayRemove(
                ...itemToRemove
            )
        });
    } catch (error) {
        console.log('Error removing from favorites', error.message)
    }


}

export const createUserDocumentFromAuth = async (userAuth, additionalInformation = {}) => {
    if (!userAuth) return;

    const uid = userAuth.uid

    const userDocRef = doc(db, 'users', uid);
    const favoritesDocRef = doc(db, "favorites", uid);

    const userSnapshot = await getDoc(userDocRef)

    //if user data not exists
    if (!userSnapshot.exists()) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt,
                ...additionalInformation,
            });
        } catch (error) {
            console.log('Error creating the user', error.message)
        }

        try {
            await setDoc(favoritesDocRef, {
                items: arrayUnion({
                    name: 'Placeholder favorite'
                })
            });
        } catch (error) {
            console.log('Error creating the user', error.message)
        }
    }

    //if user data exists
    return userDocRef;

};

export const createAuthUserWithEmailAndPasword = async (email, password) => {
    if (!email || !password) return;

    return await createUserWithEmailAndPassword(auth, email, password)
}

export const signInAuthWithEmailAndPaswword = async (email, password) => {
    if (!email || !password) return;

    return await signInWithEmailAndPassword(auth, email, password);

}

export const signOutUser = async () => await signOut(auth)

export const onAuthStateChangedListener = (callback) => onAuthStateChanged(auth, callback);

