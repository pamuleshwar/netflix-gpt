// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDAlPMSjsvwh40bdqjWlHENDiJ1FPWT9Sk",
  authDomain: "netflix-gpt-e7961.firebaseapp.com",
  projectId: "netflix-gpt-e7961",
  storageBucket: "netflix-gpt-e7961.appspot.com",
  messagingSenderId: "111185239547",
  appId: "1:111185239547:web:d35aeb255386aa68a13f5e",
  measurementId: "G-E7G8YB1TVX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();