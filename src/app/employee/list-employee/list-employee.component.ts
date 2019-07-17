import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/models/Employee';
import { EmployeeService } from 'src/app/services/employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-employee',
  templateUrl: './list-employee.component.html',
  styleUrls: ['./list-employee.component.css']
})
export class ListEmployeeComponent implements OnInit {

  
  empList: Employee[]
  employee: Employee

  constructor(private employeeService: EmployeeService, private router: Router) { }

  ngOnInit() {
    this.loadData();     
  }

  loadData(){
    this.employeeService.getEmployees().subscribe(
      (data: any) =>
      {
        this.empList = data;
      });
  }

  createEmployee(){
    this.router.navigate(['createEmployee']);
  }

  viewEmployee(emp: Employee){
    let empId = emp.empId;

    // this.employeeService.getEmployeeById(empId).subscribe(
    //   (data: any) =>
    //   {
    //     this.employee = data;
        
    //   });

      this.router.navigate(['viewEmployee']);

  }

  editEmployee(emp: Employee){
    let empId = emp.empId;
    this.router.navigate(['editEmployee/' + empId]);
  }

  deleteconfirmation(empId: string){
    if (confirm("Are you sure you want to delete this ?")) {  
      this.employeeService.deleteEmployee(empId).subscribe(
        (data: any)  => {  
        alert("Deleted successfully !!!");  
        this.loadData();  
      })  
    } 
  }

}
