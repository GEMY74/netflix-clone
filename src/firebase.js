import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAYD45fp4ubNIvSURpT8sDzF4fg6pQV1nk",
  authDomain: "disneyplus-2aa86.firebaseapp.com",
  projectId: "disneyplus-2aa86",
  storageBucket: "disneyplus-2aa86.appspot.com",
  messagingSenderId: "202015419963",
  appId: "1:202015419963:web:1bf65b0f6e45581e0c361e",
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
