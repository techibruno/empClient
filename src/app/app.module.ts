import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { CreateEmployeeComponent } from './employee/create-employee/create-employee.component';
import { ViewEmployeeComponent } from './employee/view-employee/view-employee.component';
import { DeleteEmployeeComponent } from './employee/delete-employee/delete-employee.component';
import { ListEmployeeComponent } from './employee/list-employee/list-employee.component';
import { EmployeeService } from './services/employee.service';
import { EditEmployeeComponent } from './employee/edit-employee/edit-employee.component';

const AppRoutes : Routes = [
  { path:"createEmployee", component:CreateEmployeeComponent },
  { path:"viewEmployee", component:ViewEmployeeComponent },
  { path:"editEmployee/:id", component:EditEmployeeComponent },
  { path:"listEmployee", component:ListEmployeeComponent },
  { path:"**", component:ListEmployeeComponent }
]  

@NgModule({
  declarations: [
    AppComponent,
    CreateEmployeeComponent,
    ViewEmployeeComponent,
    DeleteEmployeeComponent,
    ListEmployeeComponent,
    EditEmployeeComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(AppRoutes),
  ],
  providers: [
    EmployeeService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
