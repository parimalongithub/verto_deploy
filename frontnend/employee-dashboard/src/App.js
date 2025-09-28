import React, { useState, useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; 

import { getEmployees, getDashboard } from "./api";
import Navbar from "./components/Navbar.js";
import DashboardPage from "./components/Dashboard";
import EmployeeListPage from "./components/EmployeeListPage";
import AddEmployeePage from "./components/AddEmployeePage";
import EditEmployeePage from "./components/EditEmployeePage";

function App() {
  const [employees, setEmployees] = useState([]);
  const [dashboard, setDashboard] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    fetchEmployees();
    fetchDashboard();
  }, []);

  const fetchEmployees = async () => {
    const res = await getEmployees();
    setEmployees(res.data || []);
  };

  const fetchDashboard = async () => {
    const res = await getDashboard();
    setDashboard(res.data || {});
  };

  const refreshAll = async () => {
    await fetchEmployees();
    await fetchDashboard();
    navigate("/employees");
  };

  return (
    <div className="app-root">
      <Navbar />

      <main className="container">
        <Routes>
          <Route path="/" element={<DashboardPage employees={employees} dashboardFromApi={dashboard} refresh={refreshAll} />} />
          <Route path="/employees" element={<EmployeeListPage employees={employees} refresh={refreshAll} />} />
          <Route path="/employees/add" element={<AddEmployeePage refresh={refreshAll} />} />
          <Route path="/employees/edit/:id" element={<EditEmployeePage refresh={refreshAll} />} />
        </Routes>
      </main>

      <ToastContainer position="top-right" autoClose={3000} hideProgressBar={false} newestOnTop />
    </div>
  );
}

export default App;
