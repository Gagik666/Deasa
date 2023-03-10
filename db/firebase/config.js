// This is where firebase settings and data are called from within the project

import "firebase/auth";
import firebase from "firebase/compat/app";
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDFxE_xPUgtKuZDPH7duSS44eaf6-VNyLo",
    authDomain: "deasa13-6bd02.firebaseapp.com",
    databaseURL: "https://deasa13-6bd02-default-rtdb.firebaseio.com",
    projectId: "deasa13-6bd02",
    storageBucket: "deasa13-6bd02.appspot.com",
    messagingSenderId: "517703666369",
    appId: "1:517703666369:web:0bd51eafa379127f2d6240",
    measurementId: "G-PV4TJG56Z6"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getDatabase(app);

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}