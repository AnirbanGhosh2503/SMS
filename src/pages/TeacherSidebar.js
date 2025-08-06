import React from "react";
import {
  FaChalkboardTeacher,
  FaBookOpen,
  FaSignOutAlt,
} from "react-icons/fa";
import "../styles/TeacherDashboard.css";
import teacherProfile from "../assets/teacher.jpg"; // Make sure this image exists

function TeacherSidebar({ onSelect }) {
  return (
    <nav className="admin-sidebar">
      <div className="sidebar-profile text-center mb-3">
        <img src={teacherProfile} alt="Teacher" className="sidebar-avatar" />
        <h2 className="sidebar-title">Teacher</h2>
      </div>

      <ul className="sidebar-menu">
        <li onClick={() => onSelect("dashboard")}>
          <FaChalkboardTeacher /> Dashboard
        </li>
        <li onClick={() => onSelect("classes")}>
          <FaBookOpen /> My Classes
        </li>
      </ul>

      {/* Logout pinned to bottom */}
      <div className="sidebar-logout mt-auto pt-4">
        <ul className="sidebar-menu">
          <li onClick={() => (window.location.href = "/")}>
            <FaSignOutAlt /> Logout
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default TeacherSidebar;
