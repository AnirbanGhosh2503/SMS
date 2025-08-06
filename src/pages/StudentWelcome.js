import React from "react";
import studentAvatar from "../assets/teacher.jpg"; // Same image as in sidebar

function StudentWelcome() {
  return (
    <div className="welcome-card">
      <img src={studentAvatar} alt="Student" className="admin-photo" />
      <h2>Welcome, Student!</h2>
      <p className="role">Role: Student</p>
      <p>Access your courses, track progress, and manage your profile.</p>
    </div>
  );
}

export default StudentWelcome;
