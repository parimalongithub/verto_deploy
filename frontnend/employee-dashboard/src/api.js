import axios from "axios";

const API_URL = "https://1fcedc69-343e-4e55-a22f-61ddb73639dd.e1-us-east-azure.choreoapps.dev/api/employees";

export const getEmployees = () => axios.get(API_URL);
export const getEmployee = (id) => axios.get(`${API_URL}/${id}`);
export const addEmployee = (employee) => axios.post(API_URL, employee);
export const updateEmployee = (id, employee) => axios.put(`${API_URL}/${id}`, employee);
export const deleteEmployee = (id) => axios.delete(`${API_URL}/${id}`);
export const getDashboard = () => axios.get(`${API_URL}/dashboard`);
