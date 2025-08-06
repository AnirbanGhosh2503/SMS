import React from "react";
import {
  FaUserGraduate,
  FaBook,
  FaSignOutAlt,
} from "react-icons/fa";
import "../styles/StudentDashboard.css";
import studentAvatar from "../assets/teacher.jpg"; // Make sure this image exists

function StudentSidebar({ onSelect }) {
  return (
    <nav className="admin-sidebar">
      <div className="sidebar-profile text-center mb-3">
        <img src={studentAvatar} alt="Student" className="sidebar-avatar" />
        <h2 className="sidebar-title">Student</h2>
      </div>

      <ul className="sidebar-menu">
        <li onClick={() => onSelect("dashboard")}>
          <FaUserGraduate /> Dashboard
        </li>
        <li onClick={() => onSelect("courses")}>
          <FaBook /> My Courses
        </li>
      </ul>

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

export default StudentSidebar;
