import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from "firebase/auth"
const firebaseConfig = {
  apiKey: "AIzaSyATi1qXEPfG4K3QOW1PNy7S91PJ837R6GE",
  authDomain: "triptactix-7addf.firebaseapp.com",
  projectId: "triptactix-7addf",
  storageBucket: "triptactix-7addf.appspot.com",
  messagingSenderId: "110483922431",
  appId: "1:110483922431:web:9f57b20a22debc73ae1bca",
  measurementId: "G-6DMNPT3T24"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app)
const provider =new GoogleAuthProvider();
export{auth,provider};