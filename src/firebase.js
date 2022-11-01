import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

var firebaseConfig = {

    apiKey: "AIzaSyBWp21kRHYUcy4bxxuwlCwY8pcU3Fc-brw",
    authDomain: "diary-16821.firebaseapp.com",
    projectId: "diary-16821",
    storageBucket: "diary-16821.appspot.com",
    messagingSenderId: "600814106200",
    appId: "1:600814106200:web:99bda7a6eadee3139efc2d"
  
  };
  
  
  firebase.initializeApp(firebaseConfig);
  

export { firebase };