// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB3o4aP7Vg1TsFTPA4NMFS4Xt58xnZyROA",
  authDomain: "dragon-news-8bf56.firebaseapp.com",
  projectId: "dragon-news-8bf56",
  storageBucket: "dragon-news-8bf56.appspot.com",
  messagingSenderId: "438779467",
  appId: "1:438779467:web:cf9fc493a798c8f25dd7ce"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;