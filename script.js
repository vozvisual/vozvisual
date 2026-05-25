import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyDpXbQbaFdxyDzSD6c77TKa7t0tD1W0Otk",
  authDomain: "vozvisual-b4983.firebaseapp.com",
  projectId: "vozvisual-b4983",
  storageBucket: "vozvisual-b4983.firebasestorage.app",
  messagingSenderId: "481254899304",
  appId: "1:481254899304:web:374094321bc039b7b605dd",
  measurementId: "G-YN01SCB7XK"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

window.loginGoogle = async () => {
  try {
    const result = await signInWithPopup(auth, provider);
    alert("Logado como: " + result.user.email);
  } catch (err) {
    alert("Erro ao entrar: " + err.message);
  }
};
