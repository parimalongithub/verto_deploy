package com.verto.verto.Service;

import com.verto.verto.Entity.Employee;
import com.verto.verto.repository.EmployeeRepository;
import org.springframework.stereotype.Service;

import java.util.*;
import java.util.stream.Collectors;

@Service
public class EmployeeService {

    private final EmployeeRepository repo;

    public EmployeeService(EmployeeRepository repo) {
        this.repo = repo;
    }

    public List<Employee> getAllEmployees() {
        return repo.findAll();
    }

    public Employee getEmployee(Long id) {
        return repo.findById(id).orElseThrow(() -> new RuntimeException("Employee not found"));
    }

    public Employee addEmployee(Employee emp) {
        return repo.save(emp);
    }

    public Employee updateEmployee(Long id, Employee emp) {
        Employee existing = getEmployee(id);
        existing.setName(emp.getName());
        existing.setEmail(emp.getEmail());
        existing.setPosition(emp.getPosition());
        existing.setGender(emp.getGender());
        existing.setDepartment(emp.getDepartment());
        existing.setCreatedAt(emp.getCreatedAt());
        existing.setAge(emp.getAge());
        return repo.save(existing);
    }

    public void deleteEmployee(Long id) {
        repo.deleteById(id);
    }

    public Map<String, Object> getDashboardStats() {
        List<Employee> employees = repo.findAll();
        Map<String, Object> stats = new HashMap<>();

        stats.put("totalEmployees", employees.size());

        double avgAge = employees.stream()
                .filter(e -> e.getAge() != null)
                .mapToInt(Employee::getAge)
                .average()
                .orElse(0);
        stats.put("averageAge", avgAge);

        Map<String, Long> genderDist = employees.stream()
                .collect(Collectors.groupingBy(Employee::getGender, Collectors.counting()));
        stats.put("genderDistribution", genderDist);

        Map<String, Long> deptDist = employees.stream()
                .collect(Collectors.groupingBy(Employee::getDepartment, Collectors.counting()));
        stats.put("departmentDistribution", deptDist);

        stats.put("departments", deptDist.size());

        return stats;
    }
}
