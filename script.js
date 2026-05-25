import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyAq5iPaCDPbb9Gl_pJDamyMUpjdRr9hIkE",
  authDomain: "vozvisualnovo.firebaseapp.com",
  projectId: "vozvisualnovo",
  storageBucket: "vozvisualnovo.firebasestorage.app",
  messagingSenderId: "976285263773",
  appId: "1:976285263773:web:520352d6ba7d6f3dd53174",
  measurementId: "G-RXGH46F7PD"
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

