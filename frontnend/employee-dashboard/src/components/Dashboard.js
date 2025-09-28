import React, { useMemo } from "react";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
} from "recharts";

export default function DashboardPage({ employees, dashboardFromApi }) {
  const total = employees.length || dashboardFromApi.totalEmployees || 0;

  const genderCounts = useMemo(() => {
    const counts = { Male: 0, Female: 0, Other: 0 };
    employees.forEach((e) => {
      if (e.gender && counts[e.gender] !== undefined) counts[e.gender] += 1;
    });
    if (total === 0 && dashboardFromApi?.genderDistribution) {
      return dashboardFromApi.genderDistribution;
    }
    return counts;
  }, [employees, dashboardFromApi, total]);

  const deptCounts = useMemo(() => {
    const map = {};
    employees.forEach((e) => {
      if (e.department) map[e.department] = (map[e.department] || 0) + 1;
    });
    if (Object.keys(map).length === 0 && dashboardFromApi?.departmentDistribution) {
      return Object.entries(dashboardFromApi.departmentDistribution).map(
        ([name, value]) => ({ name, value })
      );
    }
    return Object.entries(map).map(([name, value]) => ({ name, value }));
  }, [employees, dashboardFromApi]);

  const avgAge = useMemo(() => {
    const ages = employees.map((e) => e.age).filter((a) => a !== undefined && a !== null);
    if (ages.length === 0 && dashboardFromApi?.averageAge)
      return dashboardFromApi.averageAge.toFixed(1);
    if (ages.length === 0) return null;
    return (ages.reduce((a, b) => a + b, 0) / ages.length).toFixed(1);
  }, [employees, dashboardFromApi]);

  const genderData = [
    { name: "Male", value: genderCounts.Male || 0 },
    { name: "Female", value: genderCounts.Female || 0 },
    { name: "Other", value: genderCounts.Other || 0 },
  ];

  const COLORS = ["#3498db", "#f06292", "#95a5a6"];

  return (
    <div>
      {/* KPI Row */}
      <div className="kpi-grid-full">
        <div className="kpi align-left">
          <h4>Total Employees</h4>
          <p>{total}</p>
        </div>
        <div className="kpi align-center">
          <h4>Average Age</h4>
          <p>{avgAge ? `${avgAge} yrs` : "N/A"}</p>
        </div>
        <div className="kpi align-right">
          <h4>Departments</h4>
          <p>{deptCounts.length} distinct</p>
        </div>
      </div>

      {/* Charts */}
      <div className="charts-grid">
        <div className="card">
          <h3>Gender Distribution</h3>
          <PieChart width={400} height={280}>
            <Pie
              data={genderData}
              cx="50%"
              cy="50%"
              outerRadius={90}
              dataKey="value"
              label
            >
              {genderData.map((entry, index) => (
                <Cell key={index} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip formatter={(val) => [`${val} Employees`, "Count"]} />
            <Legend />
          </PieChart>
        </div>

        <div className="card">
          <h3>People by Department</h3>
          {deptCounts.length === 0 ? (
            <p>No department data</p>
          ) : (
            <BarChart
              width={450}
              height={280}
              data={deptCounts}
              margin={{ top: 10, right: 20, left: 0, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis allowDecimals={false} />
              <Tooltip formatter={(val) => [`${val} Employees`, "Employees"]} />
              <Bar dataKey="value" fill="#2f80ed" />
            </BarChart>
          )}
        </div>
      </div>
    </div>
  );
}