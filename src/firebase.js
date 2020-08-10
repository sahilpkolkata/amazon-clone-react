import firebase from 'firebase'

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyACDgc3hKnqTdhXGc1m-6TjFi9nOx1g_g8",
  authDomain: "clone-react-f0a80.firebaseapp.com",
  databaseURL: "https://clone-react-f0a80.firebaseio.com",
  projectId: "clone-react-f0a80",
  storageBucket: "clone-react-f0a80.appspot.com",
  messagingSenderId: "534744761486",
  appId: "1:534744761486:web:d9edcad435296df178f5df",
  measurementId: "G-23G9FS21JN"
})

// const db = firebaseApp.firestore()
const auth = firebase.auth()

export { auth }