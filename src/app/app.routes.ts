import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';

export const routes: Routes = [
    {path: 'employees', component: EmployeeListComponent},
    {path:'create-employee', component: CreateEmployeeComponent},
    {path: 'update-employee', component: UpdateEmployeeComponent},
    {path: 'update-employee/:id', component: UpdateEmployeeComponent},
    {path: 'employee-details/:id', component: EmployeeDetailsComponent},
    {path: '', redirectTo: 'employees', pathMatch: 'full'},
    {path: 'a', redirectTo: 'employees', pathMatch: 'full'},
    {path: 'b', redirectTo: 'create-employee', pathMatch: 'full'}

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule{ }