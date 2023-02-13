import firebase from "firebase/app"
import "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyBinNYan9cvzD5bNoGOJfYGkXswFXQlatI",
    authDomain: "yc-blog-e800f.firebaseapp.com",
    projectId: "yc-blog-e800f",
    storageBucket: "yc-blog-e800f.appspot.com",
    messagingSenderId: "102729350954",
    appId: "1:102729350954:web:7c825c98e9833fe1a42853"
};

// init firebase
firebase.initializeApp(firebaseConfig);

let db = firebase.firestore();
let timestamp = firebase.firestore.FieldValue.serverTimestamp;

export {db, timestamp};