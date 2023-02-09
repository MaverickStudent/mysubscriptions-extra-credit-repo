import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyBDjT46b9pPoP32YxvoNRbelvg4CxkJLKU",
  authDomain: "mysubscriptions-extracredit.firebaseapp.com",
  projectId: "mysubscriptions-extracredit",
  storageBucket: "mysubscriptions-extracredit.appspot.com",
  messagingSenderId: "607118166435",
  appId: "1:607118166435:web:387fd02a85c5a29031b216"
};

const db = firebase.initializeApp(firebaseConfig)
export default db.firestore()
