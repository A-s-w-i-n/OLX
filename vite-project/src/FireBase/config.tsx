
import { initializeApp, } from "firebase/app"; 
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyDbLBS-a-mar-JdJnk6HQ7flNHy6UyVGOE",
    authDomain: "olx-clone-d1722.firebaseapp.com",
    projectId: "olx-clone-d1722",
    storageBucket: "olx-clone-d1722.appspot.com",
    messagingSenderId: "1079044190661",
    appId: "1:1079044190661:web:56634af08ba6977da29bac",
    measurementId: "G-PFVHEDWTX2"
  };

 
const app = initializeApp(firebaseConfig); 
const db = getFirestore(app)
const auth = getAuth(app);
const storage = getStorage(app);
export {db,auth,storage}