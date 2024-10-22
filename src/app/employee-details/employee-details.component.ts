import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { EmployeeService } from '../employee.service';
import { Employee } from '../employee';

@Component({
  selector: 'app-employee-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent {
  employee: Employee = new Employee();  // Employee model object
  private route = inject(ActivatedRoute);  // Use inject for DI
  private employeeService = inject(EmployeeService);  // Use inject for EmployeeService

  constructor() {
    const id = Number(this.route.snapshot.paramMap.get('id'));  // Fetch ID from route params

    // Subscribe using an observer object
    this.employeeService.getEmployeeById(id).subscribe({
      next: (data: Employee) => {
        this.employee = data;  // Populate the employee data
      },
      error: (err) => {
        console.error('Error fetching employee:', err);  // Handle any errors
      },
      complete: () => {
        console.log('Employee details fetched successfully');  // Optional: Handle completion
      }
    });
  }
}
