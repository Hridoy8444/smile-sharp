// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDX2O3LuizfCF2jAPKLc_yqkN7nyuZ6S_g",
  authDomain: "smile-sharp-photography.firebaseapp.com",
  projectId: "smile-sharp-photography",
  storageBucket: "smile-sharp-photography.appspot.com",
  messagingSenderId: "996038148885",
  appId: "1:996038148885:web:e5dd22210268fdf9325f1c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;