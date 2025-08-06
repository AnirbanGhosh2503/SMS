import React, { useState } from "react";
import StudentSidebar from "./StudentSidebar";
import StudentWelcome from "./StudentWelcome";
import MyCourses from "./MyCourses"; // You can implement this next
import "../styles/StudentDashboard.css";

function StudentDashboard() {
  const [selectedMenu, setSelectedMenu] = useState("dashboard");

  const renderContent = () => {
    switch (selectedMenu) {
      case "dashboard":
        return <StudentWelcome />;
      case "courses":
        return <MyCourses />;
      default:
        return <StudentWelcome />;
    }
  };

  return (
    <div className="admin-layout">
      <StudentSidebar onSelect={setSelectedMenu} />
      <div className="admin-content">{renderContent()}</div>
    </div>
  );
}

export default StudentDashboard;
