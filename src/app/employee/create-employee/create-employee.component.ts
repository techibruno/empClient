import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { Employee } from 'src/app/models/employee';
import { EmployeeService } from 'src/app/services/employee.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {

  createEmployeeForm: FormGroup
  value: any;
  submitted = false;

  constructor(private fb: FormBuilder, private employeeService: EmployeeService,  private router: Router) { }

  ngOnInit() {
    this.createEmployeeForm = this.fb.group({
      empFirstName: ['', Validators.required],
      empLastName: ['', Validators.required],
      dateOfBirth: ['', Validators.required],
      email: ['', Validators.required, Validators.email],
      password: ['', Validators.required, Validators.minLength(6)]
    })
  }

  
  onFormSubmit(){

    this.submitted = true;
 
    // stop the process here if form is invalid
    if (this.createEmployeeForm.invalid) {
        return;
    }

    const emp = this.createEmployeeForm.value;    
    this.createUser(emp);   
  }

  createUser(emp: Employee){
    this.employeeService.createEmployee(emp).subscribe(
      (data: any) => 
      {
        this.value = data;
        console.log(this.value);    
        this.router.navigate(['listEmployee']);  
      });
  }

}
