import React, { useState } from "react";
import "./LoginModal.css";
import { useNavigate } from "react-router-dom";


function LoginModal({ isOpen, onClose }) {
  const [loginId, setLoginId] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();


  if (!isOpen) return null;

  const handleSubmit = (e) => {
  e.preventDefault();

  const trimmedId = loginId.trim().toLowerCase();

  if (trimmedId === "admin123") {
    navigate("/admin");
  } else if (trimmedId === "teacher123") {
    navigate("/teacher");
  } else if (trimmedId === "student123") {
    navigate("/student");
  } else {
    alert("Invalid Login ID");
    return;
  }

  // Reset fields after redirection
  setLoginId("");
  setPassword("");
  onClose();
};
  

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="close-btn" onClick={onClose}>×</button>
        <h2 className="modal-title">Login</h2>
        <form className="login-form" onSubmit={handleSubmit}>
          <label>Login ID</label>
          <input
            type="text"
            placeholder='e.g. "admin123"'
            value={loginId}
            onChange={(e) => setLoginId(e.target.value)}
            required
          />

          <label>Password</label>
          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button type="submit" className="login-btn">Login</button>
        </form>
      </div>
    </div>
  );
}

export default LoginModal;
