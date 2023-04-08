import firebase from "firebase/app"
import "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyBWNEFHtbjh3PVt_OLfsO0PpZVgSB0B704",
    authDomain: "yc-blog-628e8.firebaseapp.com",
    projectId: "yc-blog-628e8",
    storageBucket: "yc-blog-628e8.appspot.com",
    messagingSenderId: "1071785387577",
    appId: "1:1071785387577:web:760b17c0c8ae304b838fe8"
  };

// init firebase
firebase.initializeApp(firebaseConfig);

let db = firebase.firestore();
let timestamp = firebase.firestore.FieldValue.serverTimestamp;

export {db, timestamp};