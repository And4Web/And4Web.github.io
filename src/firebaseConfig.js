import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
  apiKey: process.env._React_App_ApiKey,
  authDomain: "testtask-42331.firebaseapp.com",
  projectId: "testtask-42331",
  storageBucket: "testtask-42331.appspot.com",
  messagingSenderId: process.env._React_App_messagingSenderId,
  appId: process.env._React_App_appId,
  measurementId: process.env._React_App_measurementId,
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
