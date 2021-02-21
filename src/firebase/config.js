import firebase from 'firebase'
import 'firebase/firestore' 

import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyDN81mcDqPQ3ZBcNZtBz_-Fg5ZRw6zbsRI",
    authDomain: "vue-firebase-sites-67655.firebaseapp.com",
    projectId: "vue-firebase-sites-67655",
    storageBucket: "vue-firebase-sites-67655.appspot.com",
    messagingSenderId: "224329665548",
    appId: "1:224329665548:web:ed96927c0cc82ef13d7229"
  };

  //iit firebase

  firebase.initializeApp(firebaseConfig)

  const projectAuth = firebase.auth()
  const projectFirestore = firebase.firestore()  

  const timestamp = firebase.firestore.FieldValue.serverTimestamp


  export {projectAuth, projectFirestore, timestamp}