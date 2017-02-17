import { Employee } from '../model/employee';
import { EMPLOYEES } from './employee-mock.data';

export class EmployeeService {

    getEmployeeList() : Promise<Employee[]> {
        return Promise.resolve(EMPLOYEES);
    }

    getEmployeeById(id : number) : Promise<Employee> {
        return this.getEmployeeList().then(heroes => heroes.find(hero => hero.id === id));
    }

    add(hero: Employee) : void {
      EMPLOYEES.push(hero);
    }

    delete(id : number) : void {
        for (var i = 0; i < EMPLOYEES.length; i++) {
            if (EMPLOYEES[i].id == id) {
                EMPLOYEES.splice(i, 1);
                break;
            }
        }
    }

    update(_hero : Employee) : void {
        for (var i = 0; i < EMPLOYEES.length; i++) {
            if (EMPLOYEES[i].id == _hero.id) {
                EMPLOYEES[i].name = _hero.name;
                EMPLOYEES[i].alterEgo = _hero.alterEgo;
                EMPLOYEES[i].power = _hero.power;
                break;
            }
        }
    }

    getNextEmployeeId() : number {
        return EMPLOYEES.length + 1;
    }
}
