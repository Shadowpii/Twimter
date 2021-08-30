import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB-L2c-9tmFmc2iyRaGlmij-L2XSnBcgsk",
  authDomain: "twitter-clone-44e00.firebaseapp.com",
  projectId: "twitter-clone-44e00",
  storageBucket: "twitter-clone-44e00.appspot.com",
  messagingSenderId: "1037640503892",
  appId: "1:1037640503892:web:ba31b08ea118b6258293c1",
  measurementId: "G-9RR957HSRL"
};

const  firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;