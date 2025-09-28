package com.verto.verto.Entity;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "employees")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Employee {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String name;

    @Column(nullable = false, unique = true)
    private String email;

    @Column(nullable = false)
    private String position;

    @Column(nullable = false)
    private String gender;

    @Column(nullable = false)
    private String department;

    @Column(nullable = false)
    private String createdAt;

    @Column(nullable = false)
    private Integer age;
}
