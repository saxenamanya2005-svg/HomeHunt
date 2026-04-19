# 🏡 HomeHunt

## 📌 About the Project
HomeHunt is a real estate web application that allows users to explore and find properties easily. It provides a simple, clean, and interactive interface for browsing property listings.
This project is built using frontend technologies with Firebase integration for backend services.

---

## ✨ Features
- Display of property listings in a clean UI  
- Add and manage property data dynamically  
- Search and filter functionality (if implemented)  
- Real-time database updates  
- Responsive design for different devices  

---

## ⚙️ Tech Stack
- HTML  
- CSS  
- JavaScript  
- :contentReference[oaicite:1]{index=1} (Firestore Database)

---

## 🔥 Firebase Integration
This project uses Firebase as a backend service.

### Features used:
- Firestore Database for storing property listings  
- CRUD operations (Create, Read, Delete)  
- Real-time data updates  
- Modular Firebase SDK (v10+)  

### Functionality:
- Property data is stored in cloud database  
- Users can view updated listings instantly  
- Supports dynamic data handling without page reload  

---

## 🚀 How to Run the Project
1. Clone or download this repository  
2. Open the project folder  
3. Make sure Firebase configuration is added in `firebase.js`  
4. Open `index.html` in a browser  

---

## 📂 Firebase Configuration
```js
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT.appspot.com",
  messagingSenderId: "XXXX",
  appId: "XXXX"
};
