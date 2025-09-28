package com.verto.verto.Controller;

import org.springframework.web.bind.annotation.*;
import com.verto.verto.Entity.Employee;
import com.verto.verto.Service.EmployeeService;
import java.util.*;

@RestController
@RequestMapping("/api/employees")
@CrossOrigin(origins = "*")
public class EmployeeController {

    private final EmployeeService service;

    public EmployeeController(EmployeeService service) {
        this.service = service;
    }

    @GetMapping
    public List<Employee> getAllEmployees() {
        return service.getAllEmployees();
    }

    @GetMapping("/dashboard")
    public Map<String, Object> getDashboardStats() {
        return service.getDashboardStats();
    }

    @GetMapping("/{id:\\d+}")
    public Employee getEmployee(@PathVariable Long id) {
        return service.getEmployee(id);
    }

    @PostMapping
    public Employee addEmployee(@RequestBody Employee employee) {
        return service.addEmployee(employee);
    }

    @PutMapping("/{id:\\d+}")
    public Employee updateEmployee(@PathVariable Long id, @RequestBody Employee employee) {
        return service.updateEmployee(id, employee);
    }

    @DeleteMapping("/{id:\\d+}")
    public void deleteEmployee(@PathVariable Long id) {
        service.deleteEmployee(id);
    }
}
