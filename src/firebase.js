import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { initializeApp } from 'firebase/app';



// ovako pise u firebase doc, sa const
const firebaseConfig = {

    apiKey: "AIzaSyBWp21kRHYUcy4bxxuwlCwY8pcU3Fc-brw",
    authDomain: "diary-16821.firebaseapp.com",
    projectId: "diary-16821",
    storageBucket: "diary-16821.appspot.com",
    messagingSenderId: "600814106200",
    appId: "1:600814106200:web:99bda7a6eadee3139efc2d"
  
  };
  
  
firebase.initializeApp(firebaseConfig); 
  // ovako pise u firebase doc, sa const 
const app = initializeApp(firebaseConfig);

let db = firebase.firestore();


export { firebase, db };