import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


import { HttpErrorResponse } from '@angular/common/http';
import { Observable,throwError } from 'rxjs';
import {map,catchError} from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  employees: any = [];
  baseUrl = './assets';
  constructor(private http: HttpClient) { }
 
   getUserss(): Observable<any>{
     return this.http.get(`${this.baseUrl}/employee_data.json`).pipe(
       map((res) =>{
         this.employees = res;
         return this.employees;
       }),
       catchError(this.errorHandler)
     )
   }
   errorHandler(error: HttpErrorResponse){
     console.log(error);
     return throwError("Error");
   }
}
