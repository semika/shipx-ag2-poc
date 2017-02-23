import {Component, OnInit} from "@angular/core";
import {Router} from "@angular/router";
import {Student} from "../model/student";
import {StudentService} from "../service/student.service";

declare var __moduleName: string;
@Component({
    moduleId : __moduleName,
    selector : 'student-list',
    templateUrl : 'student-list.component.html',
    styleUrls : ['student-list.component.css']
})

export class StudentListCoponent implements OnInit {

    students : Student[];
    selectedStudent: Student;

    constructor(private studentService : StudentService, private router : Router) {}

    ngOnInit() : void {
        this.getStudents();
    }

    onSelect(stud : Student) : void {
        this.selectedStudent = stud;
        this.goToDetail();
    }

    goToDetail() : void {
        this.router.navigate(['studentDetail', this.selectedStudent.id, 'update']);
    }

    getStudents() : void {
        this.studentService.getStudentList().then(students => this.students = students)
    }

    addNewStudent() : void {
        this.studentService.getNextStudentId().then(id => {
            console.log("Next student id " + id + 1);
            this.router.navigate(['studentDetail', id + 1, 'new']);
        });   
    }
}
