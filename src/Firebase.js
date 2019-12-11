
import firebase from 'firebase/app'
import 'firebase/firestore'


const firebaseConfig = {
  
    apiKey: "AIzaSyB6pDgtBW5bImgeaGhVnAyC3-uq3fykgps",
    authDomain: "react-firestore-26a04.firebaseapp.com",
    databaseURL: "https://react-firestore-26a04.firebaseio.com",
    projectId: "react-firestore-26a04",
    storageBucket: "react-firestore-26a04.appspot.com",
    messagingSenderId: "57038839866",
    appId: "1:57038839866:web:9aaa48740c39ef5c8f1503"
  };

  // Initialize Firebase

  firebase.initializeApp(firebaseConfig);
  firebase.firestore();

  export default firebase;

  