import { Component , OnInit, Inject , ViewChild , AfterViewChecked} from '@angular/core';
import { ActivatedRoute, Params, Router} from '@angular/router';
import { Location } from '@angular/common'; 
import { NgForm } from '@angular/forms';

import { Student} from '../model/student';
import { StudentService} from '../service/student.service';

declare var __moduleName: string;
@Component( {
    moduleId: __moduleName,
    selector : 'student-detail',
    templateUrl : 'student-detail.component.html',
    styleUrls: ['student-detail.component.css']
})
export class StudentDetailComponent implements OnInit , AfterViewChecked {

    student: Student;

    studentForm : NgForm;

    formErrors = {
        'name': '',
        'gender': ''
    };

    validationMessages = {
        'name': {
            'required':      'Name is required.',
            'minlength':     'Name must be at least 4 characters long.',
            'maxlength':     'Name cannot be more than 24 characters long.',
            'forbiddenName': 'Someone named "Bob" cannot be a hero.'
        },
        'gender': {
            'required': 'Power is required.'
        }
    };

    constructor(private studentService : StudentService, 
                private route : ActivatedRoute, 
                private location: Location, 
                @Inject('genderList') public genderList : {},
                private router : Router) { }

    @ViewChild('studentForm') currentForm : NgForm;

    ngOnInit() : void {
        this.route.params.switchMap((params: Params) => this.studentService.getStudentById(+params['id'])).subscribe(student => {
            if (student == null) { //For new student, 0 is passed in.
                this.newStudent();
            } else {
                this.student = JSON.parse(JSON.stringify(student)); 
            }
        }); 
    }

    ngAfterViewChecked() : void {
        this.formChanged();
    }

    formChanged() : void {
        if (this.currentForm === this.studentForm ) { return; }
        this.studentForm  = this.currentForm;
        if (this.studentForm ) {
            this.studentForm .valueChanges.subscribe(data => this.onValueChanged(data));
        }
    }

     onValueChanged(data?: any) : void {
        if (!this.studentForm) { return; }
        
        const form = this.studentForm.form;

        for (const field in this.formErrors) {
            // clear previous error message (if any)
            this.formErrors[field] = '';
            const control = form.get(field);

            if (control && control.dirty && !control.valid) {
                const messages = this.validationMessages[field];
                for (const key in control.errors) {
                    this.formErrors[field] += messages[key] + ' ';
                }
            }
        }
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

