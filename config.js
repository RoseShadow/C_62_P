 import firebase from "firebase";

//initialize your database
const firebaseConfig = {
  apiKey: "AIzaSyCGMuMpNKTALs7AsVXxY0Lgxyaofahp6KE",
  authDomain: "class60-p.firebaseapp.com",
  databaseURL: "https://class60-p-default-rtdb.firebaseio.com",
  projectId: "class60-p",
  storageBucket: "class60-p.appspot.com",
  messagingSenderId: "35809331963",
  appId: "1:35809331963:web:0857b3132dd5a804df3e5e"
};

  firebase.initializeApp(firebaseConfig);
  export default firebase.database()
 

  