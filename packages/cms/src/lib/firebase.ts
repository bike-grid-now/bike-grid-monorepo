import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { CmsQuery } from "./cmsQuery";

export const firebaseConfig = {
  apiKey: "AIzaSyDxbVRKzlIaOj-yyVSA_SRiHoMWtSjj8PI",
  authDomain: "bike-grid-now.firebaseapp.com",
  projectId: "bike-grid-now",
  storageBucket: "bike-grid-now.appspot.com",
  messagingSenderId: "87272368171",
  appId: "1:87272368171:web:07c10c4954cf7fa7ef226e",
  measurementId: "G-EDKYCVXXW8",
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

export const cmsQuery = new CmsQuery(db);
