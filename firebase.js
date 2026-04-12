// =============================================
// firebase.js — Firebase setup
// This file is loaded on every page
// It connects our app to the online database
// =============================================

// Step 1: Import Firebase tools we need (from Google's CDN)
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getFirestore, collection, addDoc, getDocs, deleteDoc, doc, query, where } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

// Step 2: Our Firebase project's config (copied from Firebase console)
const firebaseConfig = {
  apiKey: "AIzaSyB1FEujw4Wj5KUQCyG6g7pbiQgvHt8MlzU",
  authDomain: "homehunt-84a1b.firebaseapp.com",
  projectId: "homehunt-84a1b",
  storageBucket: "homehunt-84a1b.firebasestorage.app",
  messagingSenderId: "647184537708",
  appId: "1:647184537708:web:5d0a8ff05cc1df71a72049"
};

// Step 3: Start Firebase and get the database
const app = initializeApp(firebaseConfig);
const db  = getFirestore(app);

// Step 4: Export db and the tools so other files can use them
export { db, collection, addDoc, getDocs, deleteDoc, doc, query, where };
