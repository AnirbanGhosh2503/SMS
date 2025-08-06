import React, { useState } from "react";
import TeacherSidebar from "./TeacherSidebar";
import TeacherWelcome from "./TeacherWelcome";
import MyClasses from "./MyClasses"; // ✅ Import this!

import "../styles/TeacherDashboard.css";

function TeacherDashboard() {
  const [selectedMenu, setSelectedMenu] = useState("dashboard"); // ✅ Define this

  const renderContent = () => {
    switch (selectedMenu) {
      case "dashboard":
        return <TeacherWelcome />;
      case "classes":
        return <MyClasses />;
      // Add more cases here later (like "assignments", "profile", etc.)
      default:
        return <TeacherWelcome />;
    }
  };

  return (
    <div className="admin-layout">
      <TeacherSidebar onSelect={setSelectedMenu} />
      <div className="admin-content">{renderContent()}</div>
    </div>
  );
}

export default TeacherDashboard;
