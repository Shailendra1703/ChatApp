import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const fireApp = firebase.initializeApp({
     // your firebase credentials
});

const db = fireApp.firestore();

const auth = fireApp.auth();

export { db, auth };
