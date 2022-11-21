// =============================
//       File not in use
// =============================

// import { initializeApp } from 'firebase/app'
// import {
//     getFirestore, collection, onSnapshot, addDoc, deleteDoc, doc, query, where, orderBy
// } from 'firebase/firestore'


import { initializeApp } from "https://www.gstatic.com/firebasejs/9.13.0/firebase-app.js"
import {
    getFirestore
} from 'https://www.gstatic.com/firebasejs/9.13.0/firebase-firestore.js'
import {
    getAuth, createUserWithEmailAndPassword, signOut,
    signInWithEmailAndPassword, onAuthStateChanged
} from 'https://www.gstatic.com/firebasejs/9.13.0/firebase-auth.js'

const firebaseConfig = {
    apiKey: "AIzaSyAUZbza5gK3933kJ4fobX_DIEIrmbZbkeA",
    authDomain: "fir-dd5f4.firebaseapp.com",
    projectId: "fir-dd5f4",
    storageBucket: "fir-dd5f4.appspot.com",
    messagingSenderId: "662937550714",
    appId: "1:662937550714:web:eb684ba78da6970f22a0c3"
};

initializeApp(firebaseConfig);

const db = getFirestore();
const auth = getAuth();

const signupForm = document.querySelector('.signup')
signupForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const email = signupForm.semail.value
    const password = signupForm.spassword.value

    createUserWithEmailAndPassword(auth, email, password)
        .then((cred) => {
            // console.log('user created: ', cred.user)
            signupForm.reset()
        })
        .catch((err) => {
            console.log(err.message)
        })
})

const loginForm = document.querySelector('.login')
loginForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const email = loginForm.lemail.value
    const password = loginForm.lpassword.value

    signInWithEmailAndPassword(auth, email, password)
        .then((cred) => {
            // console.log('user logged in: ', cred.user)
        })
        .catch((err) => {
            console.log(err.message)
        })
})

const logoutButton = document.querySelector('.logout')
logoutButton.addEventListener('click', (e) => {
    signOut(auth)
        .then(() => {
            // console.log('the user signed out')
        })
        .catch((err) => {
            console.log(err.message)
        })
})

onAuthStateChanged(auth, (user) => {
    console.log('user status changed: ', user)
})

// const colRef = collection(db, 'users');

// ==========  Using getDocs  ==========
// getDocs(colRef)
//     .then((snapshot) => {
//         let users = []
//         snapshot.docs.forEach((doc) => {
//             users.push({ ...doc.data(), id: doc.id })
//         })
//         console.log(users)
//     })
//     .catch(err => {
//         console.log(err.message)
//     })

// ==========  Using onSnapshot  ==========
// onSnapshot(colRef, (snapshot) => {
//     let users = []
//     snapshot.docs.forEach((doc) => {
//         users.push({ ...doc.data(), id: doc.id })
//     })
//     console.log(users)
// })

// ==========  Using onSnapshot, query, where  ==========
// const q = query(colRef, where("password", "==", "bharathi"))
// onSnapshot(q, (snapshot) => {
//     let users = []
//     snapshot.docs.forEach((doc) => {
//         users.push({ ...doc.data(), id: doc.id })
//     })
//     console.log(users)
// })

// ==========  Using onSnapshot, orderBy  ==========
// const q = query(colRef, orderBy('password', 'asc'))
// onSnapshot(q, (snapshot) => {
//     let users = []
//     snapshot.docs.forEach((doc) => {
//         users.push({ ...doc.data(), id: doc.id })
//     })
//     console.log(users)
// })

// const addUserForm = document.querySelector('.add')
// addUserForm.addEventListener('submit', (e) => {
//     e.preventDefault();
//     addDoc(colRef, {
//         email: addUserForm.email.value,
//         password: addUserForm.password.value,
//     })
//         .then(() => {
//             addUserForm.reset();
//         })
// })

// const deleteUserForm = document.querySelector('.delete')
// deleteUserForm.addEventListener('submit', (e) => {
//     e.preventDefault();
//     const docRef = doc(db, 'users', deleteUserForm.id.value)
//     deleteDoc(docRef)
//         .then(() => {
//             deleteUserForm.reset();
//         })
// })

// const unsubButton = document.querySelector('.unsub')
// unsubButton.addEventListener('click', (e) => {

// })