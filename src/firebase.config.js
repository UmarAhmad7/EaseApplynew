// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBKuXyT_lJLs9Ve8-SSATMucVvtmtf1fOA",
  authDomain: "jobfinder-baf9d.firebaseapp.com",
  projectId: "jobfinder-baf9d",
  storageBucket: "jobfinder-baf9d.appspot.com",
  messagingSenderId: "1075147916052",
  appId: "1:1075147916052:web:b10186c5ca55820cf17801"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db=getFirestore(app)
export {db};