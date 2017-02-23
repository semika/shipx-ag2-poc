import {Employee} from "../model/employee";
import {KeyValue} from "../../common/model/keyvalue";
import {Injectable} from "@angular/core";
import {Http, Headers, URLSearchParams, Response} from "@angular/http";
//import 'rxjs/add/operator/toPromise';
import 'rxjs/Rx';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class EmployeeService {
  private headers = new Headers({'Content-Type': 'application/json'});
  private employeeUrl = '/app/employees';
  private empTypesUrl = '/app/empTypes';

  constructor(private http: Http) {}

  getEmpTypeList(): Promise<KeyValue[]> {

    return this.http.get(this.empTypesUrl)
        .toPromise()
        .then(response => response.json().data as KeyValue[])
        .catch(this.handleError);

  }

  getEmployeeListPromise(): Promise<Employee[]> {
    return this.http.get(this.employeeUrl)
      .toPromise()
      .then(response => response.json().data as Employee[])
      .catch(this.handleError); 
  }

  getEmployeeList(): Observable<Employee[]> {
    return this.http.get (this.employeeUrl)
        .map((response: Response) => <Employee[]>response.json().data)
        .do (data => console.log ('All: ' + JSON.stringify(data)))
        .catch (this.handleError);
  }


  private success(): Promise<any> {
    return Promise.resolve();
  }

  private handleError(error: any) {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }


  getEmployeeById(id: number): Promise<Employee> {
    let fetchUrl = `${this.employeeUrl}/${id}`;
    return this.http.get(fetchUrl)
        .toPromise()
        .then(response => response.json().data as Employee)
        .catch(this.handleError);
  }

  add(employee: Employee): Promise<Employee> {
    return this.http.post(this.employeeUrl, JSON.stringify(employee), { headers: this.headers })
          .toPromise()
          .then(response => response.json().data as Employee)
          .catch(this.handleError);
  }

  delete(id: number): Promise<any> {
    let deleteUrl = `${this.employeeUrl}/${id}`;
    return this.http.delete(deleteUrl)
        .toPromise()
        .then(this.success)
        .catch(this.handleError);
  }

  update(employee: Employee): Promise<any> {
    let updateUrl = `${this.employeeUrl}/${employee.id}`;

    return this.http.put(updateUrl, JSON.stringify(employee), { headers: this.headers })
        .toPromise()
        .then(this.success)
        .catch(this.handleError);
  }

  getNextEmployeeId(): Promise<number> {
    return this.getEmployeeListPromise()
        .then(employees => employees.length + 1)
        .catch(this.handleError);
  }
}
