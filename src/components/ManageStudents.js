import React, { useState } from "react";
import { FaTrash, FaEdit } from "react-icons/fa";
import "../styles/AdminDashboard.css";

function ManageStudents() {
  const [teachers, setTeachers] = useState([
    { id: 1, name: "Alice Johnson", subject: "Mathematics" },
    { id: 2, name: "Ravi Kumar", subject: "Physics" },
  ]);

  const [showModal, setShowModal] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({ name: "", subject: "" });
  const [editingId, setEditingId] = useState(null);

  const openModal = () => {
    setFormData({ name: "", subject: "" });
    setIsEditing(false);
    setShowModal(true);
  };

  const openEditModal = (teacher) => {
    setFormData({ name: teacher.name, subject: teacher.subject });
    setIsEditing(true);
    setEditingId(teacher.id);
    setShowModal(true);
  };

  const closeModal = () => {
    setFormData({ name: "", subject: "" });
    setEditingId(null);
    setIsEditing(false);
    setShowModal(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isEditing) {
      setTeachers((prev) =>
        prev.map((t) =>
          t.id === editingId ? { ...t, name: formData.name, subject: formData.subject } : t
        )
      );
    } else {
      const newTeacher = {
        id: Date.now(),
        name: formData.name,
        subject: formData.subject,
      };
      setTeachers([...teachers, newTeacher]);
    }
    closeModal();
  };

  const handleDelete = (id) => {
    const confirmed = window.confirm("Are you sure you want to delete this teacher?");
    if (confirmed) {
      setTeachers((prev) => prev.filter((t) => t.id !== id));
    }
  };

  return (
    <div className="section-box">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2>Manage Students</h2>
        <button className="btn btn-primary" onClick={openModal}>
          + Add Teacher
        </button>
      </div>

      <div className="table-responsive">
        <table className="table teacher-table table-bordered text-white">
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Subject</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {teachers.map((teacher, index) => (
              <tr key={teacher.id}>
                <td>{index + 1}</td>
                <td>{teacher.name}</td>
                <td>{teacher.subject}</td>
                <td>
                  <button
                    className="action-btn edit-btn"
                    onClick={() => openEditModal(teacher)}
                    title="Edit"
                  >
                    <FaEdit />
                  </button>
                  <button
                    className="action-btn delete-btn"
                    onClick={() => handleDelete(teacher.id)}
                    title="Delete"
                  >
                    <FaTrash />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="custom-modal-overlay">
          <div className="custom-modal">
            <h4 className="mb-4">{isEditing ? "Edit Teacher" : "Add Teacher"}</h4>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Full Name"
                className="form-control mb-3"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
              />
              <input
                type="text"
                placeholder="Subject"
                className="form-control mb-3"
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                required
              />
              <div className="d-flex justify-content-end gap-3">
                <button type="submit" className="btn btn-primary">
                  {isEditing ? "Commit Changes" : "Add"}
                </button>
                <button type="button" className="btn btn-secondary" onClick={closeModal}>
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default ManageStudents;
