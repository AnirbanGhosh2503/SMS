import React from "react";
import "../styles/AdminDashboard.css";

function WelcomeCard() {
  return (
    <div className="welcome-card">
      <img src="/admin.jpg" alt="Admin" className="admin-photo" />
      <h2>Welcome, Admin</h2>
      <p>Role: <span className="role">Administrator</span></p>
    </div>
  );
}

export default WelcomeCard;
