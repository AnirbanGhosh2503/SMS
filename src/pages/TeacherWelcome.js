import React from "react";
import "../styles/TeacherDashboard.css";

function TeacherWelcome() {
  return (
    <div className="welcome-card">
      <img
        src="/admin.jpg"
        alt="Teacher"
        className="teacher-photo"
      />
      <h2>Welcome, Mr. Sharma</h2>
      <p className="role">Role: Teacher</p>
      <p>You can view your classes, assign homework, and check student progress.</p>
    </div>
  );
}

export default TeacherWelcome;
