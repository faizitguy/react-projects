import firebase from 'firebase'
const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyA8DmIbaBtXvK4gGirSafCre2DLqjt5r7M",
    authDomain: "fb-messenger-clone-e33d4.firebaseapp.com",
    databaseURL: "https://fb-messenger-clone-e33d4-default-rtdb.firebaseio.com",
    projectId: "fb-messenger-clone-e33d4",
    storageBucket: "fb-messenger-clone-e33d4.appspot.com",
    messagingSenderId: "754488217455",
    appId: "1:754488217455:web:9e519f53ce43776627e29a",
    measurementId: "G-W2XHMMDFS6"
  })
const db = firebaseApp.firestore()
export default db;