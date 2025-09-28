import React, { useEffect, useState } from "react";
import EmployeeForm from "./EmployeeForm";
import { getEmployee, updateEmployee } from "../api";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";

export default function EditEmployeePage({ refresh }) {
  const { id } = useParams();
  const [initial, setInitial] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      try {
        const res = await getEmployee(id);
        setInitial(res.data);
      } catch (err) {
        console.error("fetch employee failed", err);
        toast.error(" Failed to load employee"); 
        navigate("/employees");
      }
    })();
  }, [id, navigate]);

  const onUpdate = async (data) => {
    try {
      await updateEmployee(id, data);
      toast.info("Employee updated successfully!");
      await refresh();
      navigate("/employees");
    } catch (err) {
      console.error("update failed", err);
      toast.error("ailed to update employee"); 
    }
  };

  return (
    <div className="card">
      <h2>Edit Employee</h2>
      {initial ? (
        <EmployeeForm onSubmit={onUpdate} initialValues={initial} />
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
