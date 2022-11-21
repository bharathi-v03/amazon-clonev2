import { initializeApp } from 'firebase/app'
import { getAuth } from '@firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyAUZbza5gK3933kJ4fobX_DIEIrmbZbkeA",
    authDomain: "fir-dd5f4.firebaseapp.com",
    projectId: "fir-dd5f4",
    storageBucket: "fir-dd5f4.appspot.com",
    messagingSenderId: "662937550714",
    appId: "1:662937550714:web:eb684ba78da6970f22a0c3"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);