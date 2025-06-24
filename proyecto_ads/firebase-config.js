// Importa las funciones necesarias del SDK de Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.9.0/firebase-app.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  sendPasswordResetEmail,
  fetchSignInMethodsForEmail
} from "https://www.gstatic.com/firebasejs/11.9.0/firebase-auth.js";
import {
  getFirestore,
  doc,
  setDoc,
  getDoc
} from "https://www.gstatic.com/firebasejs/11.9.0/firebase-firestore.js";

// Configuración de Firebase (tus datos reales)
const firebaseConfig = {
  apiKey: "AIzaSyAPDfJ8W3W3JPgpJn_CT3oDsPusbfkoD80",
  authDomain: "registrojara.firebaseapp.com",
  projectId: "registrojara",
  storageBucket: "registrojara.appspot.com",
  messagingSenderId: "606891423938",
  appId: "1:606891423938:web:1a43d89b1277b5b0abe35b"
};

// Inicializa Firebase
const app = initializeApp(firebaseConfig);

// Obtiene instancias de los servicios
const auth = getAuth(app);
const db = getFirestore(app);

// Exporta todo lo necesario
export {
  auth,
  db,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  sendPasswordResetEmail,
  fetchSignInMethodsForEmail,
  doc,
  setDoc,
  getDoc
};