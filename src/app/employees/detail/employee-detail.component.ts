import {Component, Input, OnInit, Inject} from "@angular/core";
import {ActivatedRoute, Params, Router} from "@angular/router";
import {Location} from "@angular/common";
import "rxjs/add/operator/switchMap";
import {Employee} from "../model/employee";
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
                private router : Router,
                @Inject('empTypeList') public empTypes : {}) { }
    @Input()
    employee: Employee;

    ngOnInit() : void {
        this.route.params.switchMap((params: Params) => this.employeeService.getEmployeeById(+params['id'])).subscribe(employee => {
            if (employee == null) { // '0' should be passed when creating new employee.
                this.newHero();
            } else {
                this.employee = JSON.parse(JSON.stringify(employee)) // clone the object
            }
        });
    }

    goBack() : void {
        this.location.back();
    }

    add() : void {
        this.employee.id = this.employeeService.getNextEmployeeId();
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

    newHero() : void {
        this.employee = new Employee(this.employeeService.getNextEmployeeId(), '' , '',  '');
    }

    // TODO: Remove this when we're done
    get diagnostic() { return JSON.stringify(this.employee); }

}
