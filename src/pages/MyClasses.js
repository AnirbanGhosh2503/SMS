import React from "react";
import "../styles/TeacherDashboard.css";

const mockClasses = [
  {
    id: 1,
    subject: "Mathematics",
    grade: "8th",
    timing: "10:00 AM - 11:00 AM",
    room: "Room 101",
  },
  {
    id: 2,
    subject: "Science",
    grade: "7th",
    timing: "11:15 AM - 12:15 PM",
    room: "Room 204",
  },
  {
    id: 3,
    subject: "Computer Science",
    grade: "9th",
    timing: "2:00 PM - 3:00 PM",
    room: "Lab 2",
  },
];

function MyClasses() {
  return (
    <div className="section-box">
      <h2 className="text-center mb-4" style={{ color: "#007BFF" }}>
        My Classes
      </h2>
      <div className="class-grid">
        {mockClasses.map((cls) => (
          <div className="class-card" key={cls.id}>
            <h4 className="subject-title">{cls.subject}</h4>
            <p>
              <strong>Grade:</strong> {cls.grade}
            </p>
            <p>
              <strong>Timing:</strong> {cls.timing}
            </p>
            <p>
              <strong>Room:</strong> {cls.room}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MyClasses;
