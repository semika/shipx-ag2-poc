import {Employee} from "../model/employee";
import {EMPLOYEES} from "./employee-mock.data";

export class EmployeeService {

    getEmployeeList() : Promise<Employee[]> {
        return Promise.resolve(EMPLOYEES);
    }

    getEmployeeById(id : number) : Promise<Employee> {
        return this.getEmployeeList().then(employees => employees.find(employee => employee.id === id));
    }

    add(employee: Employee) : void {
      EMPLOYEES.push(employee);
    }

    delete(id : number) : void {
        for (var i = 0; i < EMPLOYEES.length; i++) {
            if (EMPLOYEES[i].id == id) {
                EMPLOYEES.splice(i, 1);
                break;
            }
        }
    }

    update(employee : Employee) : void {
        for (var i = 0; i < EMPLOYEES.length; i++) {
            if (EMPLOYEES[i].id == employee.id) {
                EMPLOYEES[i].name = employee.name;
                EMPLOYEES[i].address = employee.address;
                EMPLOYEES[i].empType = employee.empType;
                break;
            }
        }
    }

    getNextEmployeeId() : number {
        return EMPLOYEES.length + 1;
    }
}
