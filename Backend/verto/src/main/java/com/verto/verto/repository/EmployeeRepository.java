package com.verto.verto.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.verto.verto.Entity.Employee;

@Repository
public interface EmployeeRepository extends JpaRepository<Employee, Long> {
    
    long countByGender(String gender);
    long countByDepartment(String department);
}
