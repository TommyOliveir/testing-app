// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC0wlPsIvFvrGLODpBEW94W65gZNdkPxew",
  authDomain: "react-athentication-ad80d.firebaseapp.com",
  projectId: "react-athentication-ad80d",
  storageBucket: "react-athentication-ad80d.appspot.com",
  messagingSenderId: "900036600288",
  appId: "1:900036600288:web:be07d4ce07729ad6818b85",
  measurementId: "G-3VR9VQD71W",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
// const analytics = getAnalytics(app);
