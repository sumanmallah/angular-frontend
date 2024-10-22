import { Component } from '@angular/core';
import { RouterModule} from '@angular/router';
//removed RouterOutlet
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule,EmployeeListComponent,CreateEmployeeComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'JAVA + Angular';
}
