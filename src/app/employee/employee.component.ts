import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  employees: any = [];
  constructor(private EmployeeService: EmployeeService) { }

  ngOnInit(): void {
    this.getUserss();
  }

  getUserss(): void{
    this.EmployeeService.getUserss().subscribe(
      (res => {
        this.employees =res;
        console.log(this.employees);
      })
    );
  }
}
