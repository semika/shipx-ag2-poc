import {Component, OnInit} from "@angular/core";
import {Router} from "@angular/router";
import {Employee} from "../model/employee";
import {EmployeeService} from "../service/employee.service";

declare var __moduleName: string;
@Component({
    moduleId : __moduleName,
    selector : 'employee-list',
    templateUrl : './employee-list.component.html',
    styleUrls : ['./employee-list.component.css']
 })

export class EmployeeListComponent implements OnInit {

    employees : Employee[];
    selectedEmployee : Employee;

    constructor(private employeeService : EmployeeService, private router : Router) { }

    ngOnInit() : void {
        //this.getEmployees ();
        this.employeeService.getEmployeeList()
            .subscribe (employees => this.employees = employees);
    }

    getEmployees () : void {
       // this.employeeService.getEmployeeList().then(employees => this.employees = employees);
    }

    onSelect(employee: Employee) : void {
        this.selectedEmployee = employee;
        this.goToDetail(this.selectedEmployee.id);
    }

    goToDetail(id : number) : void {
        this.router.navigate(['employeeDetail', id]);
    }

    newRecord() : void {
        this.router.navigate(['employeeDetail', 0]);
    }
}
