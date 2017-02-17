System.register(["./employee-mock.data"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var employee_mock_data_1, EmployeeService;
    return {
        setters: [
            function (employee_mock_data_1_1) {
                employee_mock_data_1 = employee_mock_data_1_1;
            }
        ],
        execute: function () {
            EmployeeService = (function () {
                function EmployeeService() {
                }
                EmployeeService.prototype.getEmployeeList = function () {
                    return Promise.resolve(employee_mock_data_1.EMPLOYEES);
                };
                EmployeeService.prototype.getEmployeeById = function (id) {
                    return this.getEmployeeList().then(function (heroes) { return heroes.find(function (hero) { return hero.id === id; }); });
                };
                EmployeeService.prototype.add = function (hero) {
                    employee_mock_data_1.EMPLOYEES.push(hero);
                };
                EmployeeService.prototype.delete = function (id) {
                    for (var i = 0; i < employee_mock_data_1.EMPLOYEES.length; i++) {
                        if (employee_mock_data_1.EMPLOYEES[i].id == id) {
                            employee_mock_data_1.EMPLOYEES.splice(i, 1);
                            break;
                        }
                    }
                };
                EmployeeService.prototype.update = function (_hero) {
                    for (var i = 0; i < employee_mock_data_1.EMPLOYEES.length; i++) {
                        if (employee_mock_data_1.EMPLOYEES[i].id == _hero.id) {
                            employee_mock_data_1.EMPLOYEES[i].name = _hero.name;
                            employee_mock_data_1.EMPLOYEES[i].alterEgo = _hero.alterEgo;
                            employee_mock_data_1.EMPLOYEES[i].power = _hero.power;
                            break;
                        }
                    }
                };
                EmployeeService.prototype.getNextEmployeeId = function () {
                    return employee_mock_data_1.EMPLOYEES.length + 1;
                };
                return EmployeeService;
            }());
            exports_1("EmployeeService", EmployeeService);
        }
    };
});
//# sourceMappingURL=employee.service.js.map