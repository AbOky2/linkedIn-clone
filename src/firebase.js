// Importez les fonctions nécessaires à partir des SDK Firebase spécifiques
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

// Votre configuration Firebase
const firebaseConfig = {
    apiKey: "AIzaSyAK4l9JGmHm4f7iGfY7ZGI9PuYBCuIyLbA",
    authDomain: "linked-clone-baa5a.firebaseapp.com",
    projectId: "linked-clone-baa5a",
    storageBucket: "linked-clone-baa5a.appspot.com",
    messagingSenderId: "846288416847",
    appId: "1:846288416847:web:f8ae8c25e513b8de3eba3a"
};

// Initialisez Firebase
const app = initializeApp(firebaseConfig);

// Accédez à Firestore
const db = getFirestore(app);

// Accédez à Auth
const auth = getAuth(app);

export { auth, db };
