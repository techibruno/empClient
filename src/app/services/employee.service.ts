import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Employee } from 'src/app/models/employee';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private _http: HttpClient) { }

  getEmployees(){
    return this._http.get<any>(environment.baseUrl);
  }

  getEmployeeById(id: string){
    return this._http.get<any>(environment.baseUrl + "/" + id);
  }

  createEmployee(emp: Employee){
    return this._http.post<any>(environment.baseUrl, emp);
  }

  updateEmployee(id:string, emp: Employee){
    return this._http.put<any>(environment.baseUrl + "/" + id, emp);
  }

  deleteEmployee(id: string){
    return this._http.delete<any>(environment.baseUrl + "/" + id);
  }
}
