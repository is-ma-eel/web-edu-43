import firebase from 'firebase';
import 'firebase/auth';
import 'firebase/app';

const firebaseConfig = {
  apiKey: "AIzaSyBNSCWTgmCUC9nLoRqXj2js8J8tjFnRgtM",
  authDomain: "user-auth-b21e4.firebaseapp.com",
  databaseURL: "https://user-auth-b21e4.firebaseio.com",
  projectId: "user-auth-b21e4",
  storageBucket: "user-auth-b21e4.appspot.com",
  messagingSenderId: "170385911519",
  appId: "1:170385911519:web:58332d6cec15aa3ebb436a",
  measurementId: "G-05698CJ537"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.auth();

export default firebaseConfig;