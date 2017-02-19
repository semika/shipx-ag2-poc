import {Component, Input, OnInit, Inject} from "@angular/core";
import {ActivatedRoute, Params, Router} from "@angular/router";
import {Location} from "@angular/common";
import "rxjs/add/operator/switchMap";
import {Employee} from "../model/employee";
import {KeyValue} from "../../common/model/keyvalue";
import {EmployeeService} from "../service/employee.service";

declare var __moduleName: string;
@Component ( {
    moduleId : __moduleName,
    selector : 'my-employee-detail',
    templateUrl: 'employee-detail.component.html',
    styleUrls : ['employee-detail.component.css']
})
export class EmployeeDetailComponent implements OnInit {

    constructor(private employeeService: EmployeeService,
                private route: ActivatedRoute,
                private location: Location,
                private router : Router) { }
    @Input()
    employee: Employee;

    @Input()
    empTypes: KeyValue[];

    ngOnInit() : void {
        this.route.params.switchMap((params: Params) => this.employeeService.getEmployeeById(+params['id'])).subscribe(employee => {
            if (employee == null) { // '0' should be passed when creating new employee.
                this.newRecord();
            } else {
                this.employee = JSON.parse(JSON.stringify(employee)) // clone the object
            }
        });

        this.employeeService.getEmpTypeList().then(empTypes => this.empTypes = empTypes);
    }


    goBack() : void {
        this.location.back();
    }

    add() : void {
        var id: number;
        this.employeeService.getNextEmployeeId().
            then(id => id);
        this.employee.id = id;
        this.employeeService.add(this.employee);
        this.router.navigate(['employees']);
    }

    update() : void {
        this.employeeService.update(this.employee);
        this.router.navigate(['employees']);
    }

    delete() : void {
        this.employeeService.delete(this.employee.id);
        this.router.navigate(['employees']);
    }

    newRecord() : void {
        var id: number;
        this.employeeService.getNextEmployeeId().
            then(id => id);
        this.employee = new Employee(id, '' , '',  '');
    }

    // TODO: Remove this when we're done
    get diagnostic() { return JSON.stringify(this.employee); }

}
