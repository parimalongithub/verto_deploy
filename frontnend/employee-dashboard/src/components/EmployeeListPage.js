import React, { useState } from "react";
import { deleteEmployee } from "../api";
import { useNavigate } from "react-router-dom";

export default function EmployeeListPage({ employees, refresh }) {
  const navigate = useNavigate();
  const [deletingId, setDeletingId] = useState(null);

  const handleEdit = (emp) => {
    navigate(`/employees/edit/${emp.id}`);
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Delete this employee?")) return;
    setDeletingId(id);
    try {
      await deleteEmployee(id);
      await refresh();
    } catch (err) {
      console.error("delete failed", err);
      alert("Delete failed");
    } finally {
      setDeletingId(null);
    }
  };

  return (
    <div>
      <div className="card">
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <h2 style={{ margin:0 }}>Employees</h2>
          <div style={{ color: "#7f8c8d" }}>{employees.length} total</div>
        </div>

        <div style={{ marginTop: 12 }}>
          <input className="search-input" placeholder="Search name, email, or department..." 
             onChange={(e) => {
               const q = e.target.value.toLowerCase();
               const el = document.querySelectorAll(".employee-row");
               el.forEach(node => {
                 const txt = node.getAttribute("data-search") || "";
                 node.style.display = txt.includes(q) ? "flex" : "none";
               });
             }}
             style={{ padding:10, width:"100%", borderRadius:8, border:"1px solid #e6edf5", marginBottom:12 }}
          />
          {employees.length === 0 && <p>No employees available</p>}
          {employees.map(emp => (
            <div key={emp.id} className="employee-row" data-search={`${emp.name} ${emp.email} ${emp.department} ${emp.position}`.toLowerCase()}>
              <div className="employee-info">
                <h3>{emp.name}</h3>
                <p><b>Email:</b> {emp.email} &nbsp;|&nbsp; <b>Position:</b> {emp.position} &nbsp;|&nbsp; <b>Department:</b> {emp.department}</p>
                {emp.age !== undefined && <p style={{marginTop:6,color:"#6b7280"}}><b>Age:</b> {emp.age}</p>}
              </div>
              <div className="employee-actions">
                <button className="btn" onClick={() => handleEdit(emp)} style={{ background:"#3498db", color:"#fff" }}>Edit</button>
                <button className="btn" onClick={() => handleDelete(emp.id)} style={{ background:"#e74c3c", color:"#fff" }}>
                  {deletingId === emp.id ? "Deleting..." : "Delete"}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
