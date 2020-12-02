import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAvuWqA8ghd39GmxE1arMPkVEPJg7sHTHE",
  authDomain: "facebook-clone-2f114.firebaseapp.com",
  databaseURL: "https://facebook-clone-2f114.firebaseio.com",
  projectId: "facebook-clone-2f114",
  storageBucket: "facebook-clone-2f114.appspot.com",
  messagingSenderId: "57609745838",
  appId: "1:57609745838:web:ed91a0877a6cc3fac3c43f",
  measurementId: "G-SCL2YVBECJ",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
