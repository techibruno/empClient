import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { Employee } from 'src/app/models/employee';
import { EmployeeService } from 'src/app/services/employee.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.css']
})
export class EditEmployeeComponent implements OnInit {

  editEmployeeForm: FormGroup
  empId: string
  value: any;

  constructor(
    private fb: FormBuilder, 
    private employeeService: EmployeeService,
    private route: ActivatedRoute,
    private router: Router
  ) { }



  ngOnInit() {   

    this.route.paramMap.subscribe(params => {
      this.empId = params.get("id")
    })

    this.editEmployeeForm = this.fb.group({
      empId: ['', Validators.required],
      empFirstName: ['', Validators.required],
      empLastName: ['', Validators.required],
      dateOfBirth: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required]
    })

    this.employeeService.getEmployeeById(this.empId).subscribe( 
      (data: any) => 
      {
        console.log(data);
        //this.editEmployeeForm.setValue(data);
        this.editEmployeeForm.setValue({
          empId: data.empId,
          empFirstName: data.empFirstName,
          empLastName: data.empLastName,
          dateOfBirth: data.dateOfBirth,
          email: data.email,
          password: data.password
        });
      });
  }

  onFormSubmit(){
    const emp = this.editEmployeeForm.value;    
    this.updateUser(emp);   
  }

  updateUser(emp: Employee){
    this.employeeService.updateEmployee(emp.empId, emp).subscribe(
      (data: any) => 
      {
        this.value = data;
        console.log(this.value);
        this.editEmployeeForm.reset();  
        this.router.navigate(['listEmployee']);  
      });
  }

}
