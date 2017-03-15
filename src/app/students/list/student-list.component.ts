import {Component, OnInit, AfterViewInit, AfterViewChecked} from "@angular/core";
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

export class StudentListCoponent implements OnInit, AfterViewInit , AfterViewChecked{

    students : Student[];
    selectedStudent: Student;
    self:StudentListCoponent;

    constructor(private studentService : StudentService, private router : Router) {}

    ngOnInit() : void {
        this.getStudents();
    }

    ngAfterViewInit() : void {
        this.initEvents();
    }

    ngAfterViewChecked() : void {
        //this.initEvents();
    }

    initEvents(): void {
        var $scope = this;
        document.getElementsByTagName("px-data-table")[0].addEventListener("px-row-click", function(e) {
            var clickedRow = e.detail.row;
            $scope.router.navigate(['studentDetail', clickedRow.row.id.value]);
            //  console.log("Row clicked", clickedRow, " _selected: ", clickedRow._selected);
        });
    }

    onSelect(stud : Student) : void {
        this.selectedStudent = stud;
        this.goToDetail();
    }

    goToDetail() : void {
        this.router.navigate(['studentDetail', this.selectedStudent.id]);
    }

    getStudents() : void {
        this.studentService.getStudentList().then(students => this.students = students)
    }

    addNewStudent() : void {
        this.router.navigate(['studentDetail', 0]);  
    }
}
