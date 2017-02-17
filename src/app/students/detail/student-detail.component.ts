import {Component, OnInit, Inject} from "@angular/core";
import {ActivatedRoute, Params, Router} from "@angular/router";
import {Location} from "@angular/common";
import {Student} from "../model/student";
import {StudentService} from "../service/student.service";

declare var __moduleName: string;
@Component( {
    moduleId: __moduleName,
    selector : 'student-detail',
    templateUrl : 'student-detail.component.html',
    styleUrls: ['student-detail.component.css']
})
export class StudentDetailComponent implements OnInit {

    student: Student;

    constructor(private studentService : StudentService,
                private route : ActivatedRoute,
                private location: Location,
                @Inject('genderList') public genderList : {},
                private router : Router) { }

    ngOnInit() : void {
        this.route.params.switchMap((params: Params) => this.studentService.getStudentById(+params['id'])).subscribe(student => {
            if (student == null) { //For new student, 0 is passed in.
                this.newStudent();
            } else {
                this.student = JSON.parse(JSON.stringify(student));
            }
        });
    }

    add() {
        this.student.id = this.studentService.getNextStudentId();
        this.studentService.add(this.student);
        this.router.navigate(['students']);
    }

    goBack() : void {
        this.location.back();
    }

    update() : void {
        this.studentService.update(this.student);
        this.router.navigate(['students']);
    }

    delete() : void {
        this.studentService.delete(this.student.id);
        this.router.navigate(['students']);
    }

    newStudent() : void {
        this.student = new Student(this.studentService.getNextStudentId(), '', '');
    }
}

