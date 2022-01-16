// import {firebase} from 'firebase';
// import * as firebase from "firebase/app";
import firebase  from 'firebase/compat';
// import { initializeApp } from 'firebase/app';
// import { getFirestore, collection, getDocs } from 'firebase/firestore';
// import { initializeApp } from 'firebase/app'
// import 'firebase/firestore'
// import '@firebase/firestore/dist/esm/index';

const firebaseConfig = {
    apiKey: "AIzaSyC4_0--zgrSKCrEJ24t2mekOd2XZwnrYUQ",
    authDomain: "linkedin-clone-2f626.firebaseapp.com",
    projectId: "linkedin-clone-2f626",
    storageBucket: "linkedin-clone-2f626.appspot.com",
    messagingSenderId: "29922034828",
    appId: "1:29922034828:web:35a0f87258ad4f253527a9",
    measurementId: "G-QBMHJW23FW",
};

// const firebaseApp = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) :  firebase.app();

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
// const db = getFirestore();
const auth = firebase.auth();

export { db,auth };