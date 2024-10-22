import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update-employee',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent implements OnInit{
//id!: number;
id: number = 0;
  employee: Employee = new Employee();
  constructor(private employeeService: EmployeeService, private route: ActivatedRoute, private router: Router){}

  ngOnInit(): void {
    this.id = +this.route.snapshot.params['id']; // Use '+' to ensure it's a number
  
    if (!isNaN(this.id) && this.id > 0) {
      this.employeeService.getEmployeeById(this.id as number).subscribe({
        next: (data: Employee) => {
          this.employee = data;
        },
        error: (err: any) => {
          console.error('Error fetching employee by ID', err);
        },
        complete: () => {
          console.log('Employee data fetching completed');
        }
      });
    } else {
      console.error('Invalid employee ID');
      // Handle case where ID is invalid, e.g., navigate to an error page
    }
  }
  onSubmit(){
    this.employeeService.updateEmployee(this.id,this.employee).subscribe(data =>{
      this.goToEmployeelist();
    },
    error => console.log(error));

  }
  goToEmployeelist(){
    this.router.navigate(['/employees']);
  }

}
