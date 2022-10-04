import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import {IEmployee} from '../employee'
 
@Component({
  selector: 'app-emplyee-details',
  templateUrl: './emplyee-details.component.html',
  styleUrls: ['./emplyee-details.component.css']
})
export class EmplyeeDetailsComponent implements OnInit {
  public employee !: IEmployee[] ;
  constructor(private employeeService: EmployeeService) { }

  ngOnInit(): void {
    this.employeeService.getEmployees()
    .subscribe(data => this.employee = data)

  }

}
