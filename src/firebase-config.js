import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyAqbo2oMzw5zSdOoNLvdOD8wx9G_WmlInA",
  authDomain: "employee-app-7a982.firebaseapp.com",
  projectId: "employee-app-7a982",
  storageBucket: "employee-app-7a982.appspot.com",
  messagingSenderId: "95472556173",
  appId: "1:95472556173:web:5f2aaae11c67a9d2bc6ac4",
};
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
