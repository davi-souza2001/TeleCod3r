import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getDatabase, ref, set, child, get, onValue, push } from 'firebase/database';

const firebaseConfig = {
    apiKey: "AIzaSyBsqCgNFs9lGSxkNsdaBmvtwak-tiknyKg",
    authDomain: "telecod3r.firebaseapp.com",
    projectId: "telecod3r",
    storageBucket: "telecod3r.appspot.com",
    messagingSenderId: "320657519615",
    appId: "1:320657519615:web:fc375631afc2cbfabdedca"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();
const database = getDatabase();

export { auth, database, ref, get, set, child, onValue, push };