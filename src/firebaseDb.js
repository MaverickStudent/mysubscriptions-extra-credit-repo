import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyALz_ulaLBirtJ7lc4Y7wJxDDx-haziP8Q',
  authDomain: 'my-subscriptions-9f744.firebaseapp.com',
  projectId: 'my-subscriptions-9f744',
  storageBucket: 'my-subscriptions-9f744.appspot.com',
  messagingSenderId: '545208848028',
  appId: '1:545208848028:web:6ec4fb5756df3b816ee759'
}
const db = firebase.initializeApp(firebaseConfig)
export default db.firestore()
