import { initializeApp } from "firebase/app";
import firebaseConfig from "./fireBase.config";

// Initialize Firebase
const initializeAuthentication = ()=>{
    initializeApp(firebaseConfig);
}

export default initializeAuthentication;