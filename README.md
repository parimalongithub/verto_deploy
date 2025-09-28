
# EmployeeX

EmployeeX is a full-stack Employee Management System built with **Spring Boot** (backend), **SQLite** (database), and **React** (frontend).  
It allows you to manage employees, track departments, visualize stats, and perform CRUD operations in a clean UI.

---

## 🚀 Features
- Add, Edit, Delete, and View Employees  
- Department and Gender Distribution Charts  
- KPI Dashboard with Total Employees, Average Age, and Department Stats  
- Modern and Responsive UI  
- Toast notifications for actions  

---

## 🛠️ Tech Stack
- **Backend**: Spring Boot, Hibernate, SQLite  
- **Frontend**: React, Recharts, React Router, React Toastify  
- **Database**: SQLite (lightweight, file-based database)

---

## 📦 Installation and Setup

Clone the repository:

```bash
git clone https://github.com/your-username/employeeX.git
cd employeeX






1. Database

No manual setup required — the project uses SQLite.
A file named employees.db will be created automatically in the backend.

⸻

2. Backend (Spring Boot)

Navigate into the backend folder:

Mac / Linux
cd backend
./mvnw spring-boot:run


Windows (PowerShell / CMD)
cd backend
mvnw spring-boot:run
The backend server will start at: http://localhost:8080




3. Frontend (React)

Navigate into the frontend folder:

Mac / Linux
cd frontend
npm install
npm start


Windows (PowerShell / CMD)
cd frontend
npm install
npm start
The frontend will start at: http://localhost:3000




📊 API Endpoints

Method
Endpoint
Description
GET
/api/employees
Get all employees
GET
/api/employees/{id}
Get employee by ID
POST
/api/employees
Add a new employee
PUT
/api/employees/{id}
Update an employee by ID
DELETE
/api/employees/{id}
Delete employee by ID
GET
/api/employees/dashboard
Get dashboard statistics
