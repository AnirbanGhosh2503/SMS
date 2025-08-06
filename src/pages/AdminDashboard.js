import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import WelcomeCard from "../components/WelcomeCard";
import ManageTeachers from "../components/ManageTeachers";
import ManageStudents from "../components/ManageStudents";
import "../styles/AdminDashboard.css";

function AdminDashboard() {
  const [activeSection, setActiveSection] = useState("dashboard");

  const renderContent = () => {
    switch (activeSection) {
      case "dashboard":
        return <WelcomeCard />;
      case "teachers":
        return <ManageTeachers />;
      case "students":
        return <ManageStudents />;
      default:
        return <WelcomeCard />;
    }
  };

  return (
    <div className="admin-layout">
      <Sidebar onSelect={setActiveSection} />
      <main className="admin-content">{renderContent()}</main>
    </div>
  );
}

export default AdminDashboard;
