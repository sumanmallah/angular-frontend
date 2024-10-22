import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { CommonModule } from '@angular/common';
import { EmployeeService } from '../employee.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-employee-list',
  standalone: true,
  imports: [CommonModule], // otherwise the *ngFor will not work
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  employees?: Employee[];
  constructor(private employeeService: EmployeeService, private router: Router){}
  ngOnInit(): void{
    this.getEmployees();
  }

  private getEmployees(){
    this.employeeService.getEmployeesList().subscribe(data => {
      this.employees = data;
    });
  }
  employeeDetails(employee: Employee ){
    this.router.navigate(['employee-details', employee?.id]); 
  }

  updateEmployee(employee: Employee){
    this.router.navigate(['update-employee', employee?.id]);    
  }
  deleteEmployees(id: number){
    this.employeeService.deleteEmployee(id).subscribe( data => {
      console.log(data);
      this.getEmployees();
    })
  }
         
}
