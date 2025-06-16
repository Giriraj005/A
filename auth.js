// auth.js
const firebaseConfig = {
  apiKey: "AIzaSyDxdb7CtDfIjSPKt-p8rxmPQbJi_27lHnU",
  authDomain: "mymoney-win-80d89.firebaseapp.com",
  projectId: "mymoney-win-80d89",
  storageBucket: "mymoney-win-80d89.appspot.com",
  messagingSenderId: "1078329503911",
  appId: "1:1078329503911:web:7686cae780fbddde362b82"
};

firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();

const emailEl = document.getElementById("email");
const passwordEl = document.getElementById("password");
const loginBtn = document.getElementById("login-btn");
const registerBtn = document.getElementById("register-btn");
const formTitle = document.getElementById("form-title");

let isLogin = true;

function toggleForm() {
  isLogin = !isLogin;
  loginBtn.style.display = isLogin ? "block" : "none";
  registerBtn.style.display = isLogin ? "none" : "block";
  formTitle.innerText = isLogin ? "Login" : "Register";
}

function login() {
  const email = emailEl.value;
  const password = passwordEl.value;
  auth.signInWithEmailAndPassword(email, password)
    .then(() => {
      window.location.href = "dashboard.html";
    })
    .catch(error => alert(error.message));
}

function register() {
  const email = emailEl.value;
  const password = passwordEl.value;
  auth.createUserWithEmailAndPassword(email, password)
    .then(cred => {
      return db.collection("users").doc(cred.user.uid).set({
        email,
        wallet: 100,
        bets: []
      });
    })
    .then(() => {
      alert("Registered successfully");
      window.location.href = "dashboard.html";
    })
    .catch(error => alert(error.message));
}
