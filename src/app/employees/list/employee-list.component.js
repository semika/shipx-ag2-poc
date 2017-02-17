System.register(["@angular/core", "@angular/router", "../service/employee.service"], function (exports_1, context_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var __moduleName = context_1 && context_1.id;
    var core_1, router_1, employee_service_1, EmployeeListComponent;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (employee_service_1_1) {
                employee_service_1 = employee_service_1_1;
            }
        ],
        execute: function () {
            EmployeeListComponent = (function () {
                function EmployeeListComponent(employeeService, router) {
                    this.employeeService = employeeService;
                    this.router = router;
                }
                EmployeeListComponent.prototype.ngOnInit = function () {
                    this.getHeroes();
                };
                EmployeeListComponent.prototype.getHeroes = function () {
                    var _this = this;
                    this.employeeService.getEmployeeList().then(function (employees) { return _this.employees = employees; });
                };
                EmployeeListComponent.prototype.onSelect = function (employee) {
                    this.selectedEmployee = employee;
                    this.goToDetail(this.selectedEmployee.id);
                };
                EmployeeListComponent.prototype.goToDetail = function (id) {
                    this.router.navigate(['employeeDetail', id]);
                };
                EmployeeListComponent.prototype.addNewHero = function () {
                    this.router.navigate(['employeeDetail', 0]);
                };
                return EmployeeListComponent;
            }());
            EmployeeListComponent = __decorate([
                core_1.Component({
                    moduleId: __moduleName,
                    selector: 'employee-list',
                    templateUrl: './employee-list.component.html',
                    styleUrls: ['./employee-list.component.css']
                }),
                __metadata("design:paramtypes", [employee_service_1.EmployeeService, router_1.Router])
            ], EmployeeListComponent);
            exports_1("EmployeeListComponent", EmployeeListComponent);
        }
    };
});
//# sourceMappingURL=employee-list.component.js.map