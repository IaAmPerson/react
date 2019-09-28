import * as firebase from "firebase/app";
import "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyDcq1Xvkz-Agbrx6172SSqT1BnskBbgEhg",
  authDomain: "pain-63cae.firebaseapp.com",
  databaseURL: "https://pain-63cae.firebaseio.com",
  projectId: "pain-63cae",
  storageBucket: "",
  messagingSenderId: "1065509130970",
  appId: "1:1065509130970:web:1710dbb4462d14d3328be3",
  measurementId: "G-YHHZHSRRHW"
};

firebase.initializeApp(firebaseConfig);

export default firebase;