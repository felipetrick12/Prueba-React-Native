import firebase from 'firebase/app';
import 'firebase/firebase-firestore'
import 'firebase/firebase-auth';

var firebaseConfig = {
      apiKey: "AIzaSyB-uIKsx2bB5wZSGe_qjtTrSnoWKQRquTE",
      authDomain: "prueba-4f235.firebaseapp.com",
      projectId: "prueba-4f235",
      storageBucket: "prueba-4f235.appspot.com",
      messagingSenderId: "712793200739",
      appId: "1:712793200739:web:4b9e5390e43cc513d58056",
      measurementId: "G-S31X2DG5H3"
    };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const db = firebase.firestore();

  export {
        db,
        firebase
  }