# EmployeeX

EmployeeX is a full-stack Employee Management System built with **Spring Boot** (backend), **SQLite** (database), and **React** (frontend).  
It allows you to manage employees, view analytics (gender distribution, department breakdown, average age), and perform full CRUD operations through a clean UI.

---

## 🚀 Features
- Add, Edit, Delete, and View Employees  
- KPI Dashboard (Total Employees, Average Age, Distinct Departments)  
- Charts: Gender Distribution (Pie) and Department Breakdown (Bar)  
- Form validation and toast notifications for success/errors  
- Lightweight local persistence using SQLite  
- Responsive UI built with React and Recharts

---

## 🛠️ Tech Stack
- **Backend:** Spring Boot, Spring Data JPA, Hibernate  
- **Database:** SQLite (file-based)  
- **Frontend:** React, React Router, Recharts, React Toastify  
- **Build tools:** Maven (with `mvnw` wrapper), npm

---

## 📁 Project structure (example)
```
employeeX/
├─ backend/                # Spring Boot application
│  ├─ src/
│  ├─ mvnw, mvnw.cmd
│  └─ pom.xml
├─ frontend/               # React app (create-react-app or Vite)
│  ├─ src/
│  ├─ package.json
│  └─ public/
├─ README.md
```

---

## 📦 Installation & Local Setup

### 0. Prerequisites
- Java 17+ installed and `JAVA_HOME` set  
- Maven or use the included Maven wrapper (`./mvnw`)  
- Node.js 18+ and npm (or yarn)

Clone the repo:
```bash
git clone https://github.com/your-username/employeeX.git
cd employeeX
```

---

### 1. Database (SQLite)
No manual DB installation required. The backend uses SQLite and will create a local file (e.g. `employees.db`) in the backend working directory when the server starts (as long as `spring.datasource.url=jdbc:sqlite:employees.db`).

**Important:** use `spring.jpa.hibernate.ddl-auto=update` (or `create`) in `application.properties` while developing. Avoid `create-drop` if you want data to persist after the server stops.

Sample `application.properties` (backend `src/main/resources/application.properties`):
```properties
spring.application.name=EmployeeX
spring.datasource.url=jdbc:sqlite:employees.db
spring.datasource.driver-class-name=org.sqlite.JDBC

spring.jpa.hibernate.ddl-auto=update
spring.jpa.show-sql=true
spring.jpa.properties.hibernate.format_sql=true

# Optional: if you use a community SQLite dialect (add dependency if required)
spring.jpa.database-platform=org.hibernate.community.dialect.SQLiteDialect
```

---

### 2. Backend (Spring Boot)

Change to backend folder and run the app.

#### Mac / Linux
```bash
cd backend
./mvnw spring-boot:run
```

#### Windows (PowerShell / CMD)
```powershell
cd backend
mvnw spring-boot:run
```

Server will be available at: `http://localhost:8080`

Build a jar (optional):
```bash
cd backend
./mvnw -DskipTests package
java -jar target/*.jar
```

Run tests:
```bash
./mvnw test
```

---

### 3. Frontend (React)

Open a new terminal and run the frontend.

#### Mac / Linux
```bash
cd frontend
npm install
npm start
```

#### Windows (PowerShell / CMD)
```powershell
cd frontend
npm install
npm start
```

Frontend will be available at: `http://localhost:3000`

**Environment variable (optional):** create `.env` in `frontend/` with:
```
REACT_APP_API_URL=http://localhost:8080/api
```
Use this variable in your API helper so the frontend points to the correct backend.

---

## 🔌 API Endpoints

Base: `http://localhost:8080/api/employees`

| Method | Endpoint                      | Description                    |
|--------|-------------------------------|--------------------------------|
| GET    | `/api/employees`              | Get all employees              |
| GET    | `/api/employees/{id}`         | Get employee by ID             |
| POST   | `/api/employees`              | Add a new employee             |
| PUT    | `/api/employees/{id}`         | Update an employee by ID       |
| DELETE | `/api/employees/{id}`         | Delete employee by ID          |
| GET    | `/api/employees/dashboard`    | Get dashboard statistics       |

---

## 💡 Sample requests (curl / Postman)

**Get all employees**
```bash
curl http://localhost:8080/api/employees
```

**Get employee by ID**
```bash
curl http://localhost:8080/api/employees/1
```

**Create employee** (JSON body)
```bash
curl -X POST http://localhost:8080/api/employees   -H "Content-Type: application/json"   -d '{
    "name": "Alice Johnson",
    "email": "alice.johnson@example.com",
    "position": "Software Engineer",
    "gender": "Female",
    "department": "Engineering",
    "createdAt": "2025-01-10",
    "age": 29
  }'
```

**Update employee**
```bash
curl -X PUT http://localhost:8080/api/employees/1   -H "Content-Type: application/json"   -d '{ "name": "Alice J.", "age": 30 }'
```

**Delete employee**
```bash
curl -X DELETE http://localhost:8080/api/employees/1
```

**Get dashboard stats**
```bash
curl http://localhost:8080/api/employees/dashboard
```

---

## 🧾 Sample dataset (POST multiple entries via Postman or looped curl)

Below is an array of sample employee objects (12 entries). Use them to populate the database quickly (you can import as a Postman collection or loop POSTs).

```json
[
  {"name":"Alice Johnson","email":"alice.johnson@example.com","position":"Software Engineer","gender":"Female","department":"Engineering","createdAt":"2023-07-10","age":29},
  {"name":"Bob Martin","email":"bob.martin@example.com","position":"Product Manager","gender":"Male","department":"Management","createdAt":"2022-05-21","age":36},
  {"name":"Carol Li","email":"carol.li@example.com","position":"QA Engineer","gender":"Female","department":"Engineering","createdAt":"2024-01-15","age":27},
  {"name":"Daniel Kim","email":"daniel.kim@example.com","position":"DevOps Engineer","gender":"Male","department":"Engineering","createdAt":"2021-11-02","age":31},
  {"name":"Emma Davis","email":"emma.davis@example.com","position":"HR Specialist","gender":"Female","department":"HR","createdAt":"2020-03-10","age":33},
  {"name":"Frank Moore","email":"frank.moore@example.com","position":"Sales Lead","gender":"Male","department":"Sales","createdAt":"2019-08-19","age":39},
  {"name":"Grace Park","email":"grace.park@example.com","position":"UX Designer","gender":"Female","department":"Design","createdAt":"2024-06-01","age":26},
  {"name":"Henry Clark","email":"henry.clark@example.com","position":"Business Analyst","gender":"Male","department":"Management","createdAt":"2022-12-05","age":34},
  {"name":"Ivy Nguyen","email":"ivy.nguyen@example.com","position":"Recruiter","gender":"Female","department":"HR","createdAt":"2023-09-14","age":28},
  {"name":"Jack Turner","email":"jack.turner@example.com","position":"Account Manager","gender":"Male","department":"Sales","createdAt":"2021-04-30","age":37},
  {"name":"Karla Ruiz","email":"karla.ruiz@example.com","position":"Support Engineer","gender":"Female","department":"Engineering","createdAt":"2024-02-20","age":25},
  {"name":"Liam Patel","email":"liam.patel@example.com","position":"Data Analyst","gender":"Male","department":"Management","createdAt":"2020-10-12","age":32}
]
```

---

## ⚠️ Common issues & fixes

**Hibernate / Dialect errors**
- `Unable to determine Dialect without JDBC metadata` → ensure `spring.datasource.url` is set (e.g. `jdbc:sqlite:employees.db`) and/or set `spring.jpa.database-platform` to a valid dialect.

**Driver missing (MySQL)**
- `Cannot load driver class: com.mysql.cj.jdbc.Driver` → remove MySQL settings or add MySQL connector dependency. For SQLite, ensure dependency for SQLite JDBC is in `pom.xml`:
```xml
<dependency>
  <groupId>org.xerial</groupId>
  <artifactId>sqlite-jdbc</artifactId>
  <version>3.41.2.1</version>
</dependency>
```

**Schema mismatch (`no such column: e1_0.age`)**
- After adding a new field (e.g., `age`) to the entity, either:
  - set `spring.jpa.hibernate.ddl-auto=update` so Hibernate updates the schema, or
  - delete the `employees.db` and restart the app if you want a fresh schema (development only).

**Data disappears on restart**
- If `spring.jpa.hibernate.ddl-auto=create-drop` is set, data will be removed on shutdown. Use `update` or `create` for persisting data during development.

**React NavLink active highlight persists**
- Make sure file imports match file system casing exactly (e.g. `Navbar.js` vs `navbar.js`). On some systems this causes duplicates in the module graph and sticky active states. Use consistent file name casing.

---

## 🔧 Tips & configuration

- **Change API base URL (frontend)**: set `REACT_APP_API_URL=http://localhost:8080/api` in `frontend/.env`.
- **Logging / SQL**: `spring.jpa.show-sql=true` in `application.properties` helps debugging SQL queries.
- **Persist DB file**: commit `employees.db` only for demo; usually you should add it to `.gitignore`.

---

## 🧪 Tests
If you added backend tests, run:
```bash
cd backend
./mvnw test
```

---

## 📄 License
This project is provided for demonstration and challenge purposes. Use as needed.
