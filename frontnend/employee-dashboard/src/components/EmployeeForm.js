import React, { useState, useEffect } from "react";

export default function EmployeeForm({ onSubmit, initialValues }) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    position: "",
    gender: "",
    department: "",
    createdAt: "",
    age: ""
  });

  useEffect(() => {
    if (initialValues) {
      setForm({
        name: initialValues.name || "",
        email: initialValues.email || "",
        position: initialValues.position || "",
        gender: initialValues.gender || "",
        department: initialValues.department || "",
        createdAt: initialValues.createdAt ? initialValues.createdAt.slice(0, 10) : "",
        age: initialValues.age ?? ""
      });
    }
  }, [initialValues]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((s) => ({ ...s, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ ...form, age: Number(form.age) });
  };

  return (
    <form onSubmit={handleSubmit} className="card">
      <div className="form-row" style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
        <div className="form-field"><label>Name</label><input name="name" value={form.name} onChange={handleChange} required /></div>
        <div className="form-field"><label>Email</label><input name="email" type="email" value={form.email} onChange={handleChange} required pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" title="Enter a valid email" /></div>
        <div className="form-field"><label>Position</label><input name="position" value={form.position} onChange={handleChange} required /></div>
        <div className="form-field"><label>Department</label><input name="department" value={form.department} onChange={handleChange} required /></div>
        <div className="form-field"><label>Gender</label>
          <select name="gender" value={form.gender} onChange={handleChange} required>
            <option value="">Select</option><option value="Male">Male</option><option value="Female">Female</option><option value="Other">Other</option>
          </select>
        </div>
        <div className="form-field"><label>Age</label><input name="age" type="number" min="18" max="65" value={form.age} onChange={handleChange} required /></div>
        <div className="form-field"><label>Created At</label><input name="createdAt" type="date" value={form.createdAt} onChange={handleChange} required /></div>
      </div>
      <div className="form-actions" style={{ marginTop: "20px" }}>
        <button className="btn primary" type="submit">{initialValues ? "Update Employee" : "Add Employee"}</button>
        <button className="btn ghost" type="button" onClick={() => window.history.back()}>Cancel</button>
      </div>
    </form>
  );
}
