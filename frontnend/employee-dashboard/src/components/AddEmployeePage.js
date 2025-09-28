import { toast } from "react-toastify";
import EmployeeForm from "../components/EmployeeForm";
import { addEmployee } from "../api";
import { useNavigate } from "react-router-dom";

export default function AddEmployeePage({ refresh }) {
  const navigate = useNavigate();

  const onAdd = async (data) => {
    if (!data.createdAt) data.createdAt = new Date().toISOString().slice(0, 10);

    try {
      await addEmployee(data);
      toast.success("Employee added successfully!"); 
      await refresh();
      navigate("/employees");
    } catch (err) {
      console.error("Add failed", err);
      toast.error("Failed to add employee"); 
    }
  };

  return (
    <div className="card">
      <h2>Add Employee</h2>
      <EmployeeForm onSubmit={onAdd} />
    </div>
  );
}
