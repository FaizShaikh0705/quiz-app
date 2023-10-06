import firebase from 'firebase';
require("firebase/database");
require("firebase/auth");

const config = {

  apiKey: "AIzaSyBWyqSbHD8YL9kB7RXeN4FjrtCVZ4rOaOs",
  authDomain: "quiz-aap-cd320.firebaseapp.com",
  databaseURL: "https://quiz-aap-cd320-default-rtdb.firebaseio.com",
  projectId: "quiz-aap-cd320",
  storageBucket: "quiz-aap-cd320.appspot.com",
  messagingSenderId: "779757066086",
  appId: "1:779757066086:web:0ca9debb2da8b4afeadaa7",
  measurementId: "G-FSYVGSC9CW"

};

const fire = firebase.initializeApp(config);

export const auth = firebase.auth();

export const storage = firebase.storage();

export const database = firebase.database();


export default fire;