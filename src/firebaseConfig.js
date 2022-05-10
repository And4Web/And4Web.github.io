import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDyXkF49sT0NYWC3Fx4XZX_b1vb6_0tmVo",
  authDomain: "testtask-42331.firebaseapp.com",
  projectId: "testtask-42331",
  storageBucket: "testtask-42331.appspot.com",
  messagingSenderId: "238628593954",
  appId: "1:238628593954:web:808c833ecac8b26f47c57b",
  measurementId: "G-8Q6PLXZ3V0",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
