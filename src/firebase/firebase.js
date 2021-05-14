import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyDglTVRZGronci0FtLH1AWd-S6iZcEKhAw",
    authDomain: "movies-26bc2.firebaseapp.com",
    projectId: "movies-26bc2",
    storageBucket: "movies-26bc2.appspot.com",
    messagingSenderId: "96882532532",
    appId: "1:96882532532:web:e6d2a77ff83b0857ae37e1"
  };
  firebase.initializeApp(firebaseConfig);

  const projectStorage = firebase.firestore();

  const timestamp = firebase.firestore.FieldValue.serverTimestamp;
   

  export default { projectStorage,timestamp };