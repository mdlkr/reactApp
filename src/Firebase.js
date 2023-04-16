import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {

    apiKey: "AIzaSyAUvLEXzmAwHYoysaSWi9l6eYcsYmBiFA4",
    authDomain: "projetoead-48daf.firebaseapp.com",
    projectId: "projetoead-48daf",
    storageBucket: "projetoead-48daf.appspot.com",
    messagingSenderId: "323449799518",
    appId: "1:323449799518:web:b96cd1f8aa70c55558c5cf"
  
  };

  if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
  }

  export default firebase;
  