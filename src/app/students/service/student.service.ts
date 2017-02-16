import { Student } from '../model/student';
import { STUDENTS } from '../service/student-mock.data';

export class StudentService {
    
    getStudentList() : Promise<Student[]> { 
        return Promise.resolve(STUDENTS);
    }

    getStudentById(id : number) : Promise<Student> {
        return this.getStudentList().then(students => students.find(stud => stud.id === id));
    }

    add(student: Student) : void {
        STUDENTS.push(student);
    }

    getNextStudentId() : number {
        return STUDENTS.length + 1;
    }

    delete(id : number) : void {
        for (var i = 0; i < STUDENTS.length; i++) {
            if (STUDENTS[i].id == id) {
                STUDENTS.splice(i, 1); 
                break;
            }
        }
    }

    update(student : Student) : void {
        for (var i = 0; i < STUDENTS.length; i++) {
            if (STUDENTS[i].id == student.id) {
                STUDENTS[i].name = student.name;
                STUDENTS[i].gender = student.gender;
                break;
            }
        }
    }
}