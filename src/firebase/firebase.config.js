// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD5vnma1pGFRRxRGj5onkCeliWmPi_g6SE",
  authDomain: "petuk-bengali-cuisine-client.firebaseapp.com",
  projectId: "petuk-bengali-cuisine-client",
  storageBucket: "petuk-bengali-cuisine-client.appspot.com",
  messagingSenderId: "823164217126",
  appId: "1:823164217126:web:cf6120b950da48cbec43e7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;