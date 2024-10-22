import { CommonModule } from '@angular/common';
import { Component , OnInit} from '@angular/core';
import { Employee } from '../employee';
import { FormsModule } from '@angular/forms';
import { EmployeeService } from '../employee.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-create-employee',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {
  employee: Employee = new Employee();
  //private router = Router

  constructor(private employeeService: EmployeeService, private router: Router) {}
  ngOnInit(): void {}
  
  /**saveEmployee(){
    this.employeeService.createEmployee(this.employee).subscribe(data => {
      console.log(data);
    },
     error => console.log(error));
  } **/
     saveEmployee() {
      const observer = {
        next: (data: Employee) => {
          console.log(data);
          this.goToEmployeelist();
          // Redirect to a success page or show a success message
        },
       
        error: (error: Employee) => {
          console.error(error);
          // Display an error message to the user
        }
      };
    
      this.employeeService.createEmployee(this.employee).subscribe(observer);
    }

    goToEmployeelist(){
      this.router.navigate(['/employees']);
    }

  onSubmit(){
    console.log(this.employee);
    this.saveEmployee();
  }

}
