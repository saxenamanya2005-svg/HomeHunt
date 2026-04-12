// =============================================
// auth.js — Login, Register, Logout
// Now uses Firestore instead of localStorage
// Users are saved online so any device can log in
// =============================================

import { db, collection, addDoc, getDocs, query, where } from "./firebase.js";


// REGISTER: Save a new user to Firestore
// Returns "ok" if success, "taken" if email already exists
async function register(name, email, password, role) {

  // Search Firestore: does any user already have this email?
  var usersRef = collection(db, "users");
  var q = query(usersRef, where("email", "==", email));
  var result = await getDocs(q);

  // If we found any user with this email, stop — email is taken
  if (!result.empty) {
    return "taken";
  }

  // No match — save the new user to Firestore
  await addDoc(collection(db, "users"), {
    name: name,
    email: email,
    password: password,
    role: role
  });

  return "ok";
}


// LOGIN: Check email + password + role against Firestore
// Returns user object if correct, null if not found
async function login(email, password, role) {

  var usersRef = collection(db, "users");
  var q = query(
    usersRef,
    where("email",    "==", email),
    where("password", "==", password),
    where("role",     "==", role)
  );

  var result = await getDocs(q);

  if (result.empty) {
    return null; // no match
  }

  // Match found — save to localStorage so we remember login on this browser
  var userDoc  = result.docs[0];
  var userData = { id: userDoc.id, ...userDoc.data() };
  localStorage.setItem("loggedIn", JSON.stringify(userData));

  return userData;
}


// GET LOGGED IN USER: Returns the user object, or null if nobody is logged in
function getUser() {
  return JSON.parse(localStorage.getItem("loggedIn") || "null");
}


// LOGOUT: Remove the logged in user and go to homepage
function logout() {
  localStorage.removeItem("loggedIn");
  window.location.href = "index.html";
}

export { register, login, getUser, logout };
