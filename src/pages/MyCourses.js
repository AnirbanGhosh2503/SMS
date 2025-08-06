import React from "react";
import { FaBookOpen, FaChalkboardTeacher } from "react-icons/fa";
import "../styles/StudentDashboard.css";

const sampleCourses = [
  {
    id: 1,
    name: "Mathematics",
    teacher: "Mr. Sharma",
    progress: "85%",
  },
  {
    id: 2,
    name: "Science",
    teacher: "Ms. Gupta",
    progress: "72%",
  },
  {
    id: 3,
    name: "English Literature",
    teacher: "Mrs. Dutta",
    progress: "91%",
  },
];

function MyCourses() {
  return (
    <div className="section-box">
      <h3 className="text-primary mb-4">📘 My Courses</h3>
      <table className="teacher-table">
        <thead>
          <tr>
            <th><FaBookOpen /> Course</th>
            <th><FaChalkboardTeacher /> Teacher</th>
            <th>Progress</th>
          </tr>
        </thead>
        <tbody>
          {sampleCourses.map((course) => (
            <tr key={course.id}>
              <td>{course.name}</td>
              <td>{course.teacher}</td>
              <td>{course.progress}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default MyCourses;
