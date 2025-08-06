import React from "react";
import {
  FaUserTie,
  FaChalkboardTeacher,
  FaUserGraduate,
  FaSignOutAlt,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import "../styles/AdminDashboard.css";

function Sidebar({ onSelect }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Clear any session info if added later
    navigate("/");
  };

  return (
    <nav className="admin-sidebar">
      <div className="sidebar-header">
        <img src="/admin.jpg" alt="Admin" className="sidebar-avatar" />
        <h2 className="sidebar-title">Admin</h2>
      </div>

      <ul className="sidebar-menu">
        <li onClick={() => onSelect("dashboard")}>
          <FaUserTie /> Dashboard
        </li>
        <li onClick={() => onSelect("teachers")}>
          <FaChalkboardTeacher /> Manage Teachers
        </li>
        <li onClick={() => onSelect("students")}>
          <FaUserGraduate /> Manage Students
        </li>
      </ul>

      <div className="logout-section" onClick={handleLogout}>
        <FaSignOutAlt /> Logout
      </div>
    </nav>
  );
}

export default Sidebar;
