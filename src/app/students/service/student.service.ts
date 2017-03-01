import { Injectable } from '@angular/core';
import { Headers, RequestOptions, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import {Student} from "../model/student";

@Injectable()
export class StudentService {

    private headers = new Headers({'Content-Type': 'application/json'}); 
    private studentUrl = 'api/students';

    constructor(private http: Http) {}

    getStudentList() : Promise<Student[]> {
        return this.http.get(this.studentUrl)
            .toPromise()
            .then(response => {
                    let studList = response.json()._embedded.students;                  
                    return studList as Student[];
                })
            .catch(this.handleError);
    }

    getStudentById(id : number) : Promise<Student> {
        const url = `${this.studentUrl}/${id}`;
        return this.http.get(url)
                .toPromise()
                .then(response => {
                    return response.json() as Student
                })
                .catch(this.handleError);
    }

    add(student: Student) : Promise<Student> {
        return this.http
            .post(this.studentUrl, JSON.stringify(student), {headers : this.headers})
            .toPromise()
            .then(response => response.json() as Student)
            .catch(this.handleError);

    }

    delete(id : number) : Promise<void> {
        const url = `${this.studentUrl}/${id}`;
        return this.http.delete(url, {headers: this.headers})
            .toPromise()
            .then(() => null)
            .catch(this.handleError);
    }

    update(student : Student) : Promise<Student> {
        const url = `${this.studentUrl}/${student.id}`;
        return this.http
            .put(url, JSON.stringify(student), {headers : this.headers})
            .toPromise()
            .then(() => student)
            .catch(this.handleError);
    }

    private handleError(error:any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }
}
