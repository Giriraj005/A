// dashboard.js
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

auth.onAuthStateChanged(user => {
  if (user) {
    const userRef = db.collection("users").doc(user.uid);
    userRef.get().then(doc => {
      const data = doc.data();
      document.getElementById("user-email").innerText = data.email;
      document.getElementById("wallet-balance").innerText = "₹" + data.wallet;
      loadBetHistory(data.bets || []);
    });
  } else {
    window.location.href = "index.html";
  }
});

function getAmount() {
  return parseInt(document.getElementById("bet-amount").value || "0");
}

function placeBet(type, amount, prediction) {
  const user = auth.currentUser;
  const userRef = db.collection("users").doc(user.uid);
  if (amount <= 0) return alert("Enter valid amount");

  userRef.get().then(doc => {
    const data = doc.data();
    if (data.wallet >= amount) {
      const betData = {
        type,
        prediction,
        amount,
        timestamp: new Date().toISOString()
      };

      userRef.update({
        wallet: data.wallet - amount,
        bets: firebase.firestore.FieldValue.arrayUnion(betData)
      }).then(() => {
        alert("Bet placed successfully");
        document.getElementById("wallet-balance").innerText = "₹" + (data.wallet - amount);
        addBetToHistory(betData);
      });
    } else {
      alert("Insufficient balance");
    }
  });
}

function logout() {
  auth.signOut().then(() => {
    window.location.href = "index.html";
  });
}

function loadBetHistory(bets) {
  const historyDiv = document.getElementById("bet-history");
  historyDiv.innerHTML = "";
  bets.forEach(addBetToHistory);
}

function addBetToHistory(bet) {
  const item = document.createElement("div");
  item.className = "history-item";
  item.innerText = `${bet.type.toUpperCase()} - ${bet.prediction} - ₹${bet.amount}`;
  document.getElementById("bet-history").appendChild(item);
}
