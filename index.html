// App.jsx
import React, { useState } from "react";
import { initializeApp } from "firebase/app";
import {
  getAuth,
  RecaptchaVerifier,
  signInWithPhoneNumber,
} from "firebase/auth";

// ✅ Firebase Configuration
const firebaseConfig = {
  apiKey: "AIzaSyDxdb7CtDfIjSPKt-p8rxmPQbJi_27lHnU",
  authDomain: "mymoney-win-80d89.firebaseapp.com",
  projectId: "mymoney-win-80d89",
  storageBucket: "mymoney-win-80d89.appspot.com", // Fixed typo here
  messagingSenderId: "1078329503911",
  appId: "1:1078329503911:web:7686cae780fbddde362b82"
};

// ✅ Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

function App() {
  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState("");
  const [confirmation, setConfirmation] = useState(null);
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");

  const sendOTP = async (e) => {
    e.preventDefault();
    setError(""); setMessage("");

    try {
      // Setup invisible reCAPTCHA
      if (!window.recaptchaVerifier) {
        window.recaptchaVerifier = new RecaptchaVerifier(auth, "recaptcha", {
          size: "invisible",
          callback: () => {},
        });
      }

      const appVerifier = window.recaptchaVerifier;
      const fullPhone = "+91" + phone;

      const confirmationResult = await signInWithPhoneNumber(
        auth,
        fullPhone,
        appVerifier
      );

      setConfirmation(confirmationResult);
      setMessage("OTP sent successfully!");
    } catch (err) {
      setError(err.message);
    }
  };

  const verifyOTP = async (e) => {
    e.preventDefault();
    setError(""); setMessage("");

    try {
      await confirmation.confirm(otp);
      setMessage("Phone verified & login successful!");
    } catch (err) {
      setError("Invalid OTP");
    }
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Phone Number Login</h2>
      <form onSubmit={confirmation ? verifyOTP : sendOTP} style={styles.form}>
        {!confirmation && (
          <input
            type="tel"
            placeholder="Enter phone number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            style={styles.input}
            required
          />
        )}

        {confirmation && (
          <input
            type="text"
            placeholder="Enter OTP"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            style={styles.input}
            required
          />
        )}

        <div id="recaptcha"></div>

        <button type="submit" style={styles.button}>
          {confirmation ? "Verify OTP" : "Send OTP"}
        </button>

        {error && <p style={styles.error}>{error}</p>}
        {message && <p style={styles.success}>{message}</p>}
      </form>
    </div>
  );
}

// 🔷 Simple Styles
const styles = {
  container: {
    backgroundColor: "#0a0a23",
    minHeight: "100vh",
    color: "white",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
  heading: {
    marginBottom: "20px",
  },
  form: {
    width: "300px",
    display: "flex",
    flexDirection: "column",
  },
  input: {
    marginBottom: "15px",
    padding: "10px",
    fontSize: "16px",
    borderRadius: "8px",
    border: "none",
  },
  button: {
    backgroundColor: "#00FFC6",
    padding: "10px",
    fontSize: "16px",
    borderRadius: "8px",
    border: "none",
    cursor: "pointer",
  },
  error: {
    color: "red",
    marginTop: "10px",
  },
  success: {
    color: "lightgreen",
    marginTop: "10px",
  },
};

export default App;
