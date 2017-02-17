import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { StudentListCoponent } from './students/list/student-list.component';
import { HeroListComponent } from './heroes/list/hero-list.component';
import { HeroDetailComponent } from './heroes/detail/hero-detail.component';
import { StudentDetailComponent } from './students/detail/student-detail.component';
import { EmployeeListComponent } from './employees/list/employee-list.component';
 import { EmployeeDetailComponent } from './employees/detail/employee-detail.component';

const routes: Routes =    [
                             {path : '', redirectTo : '/', pathMatch : 'full'},
                             {path : 'students', component : StudentListCoponent},
                             {path : 'heroes', component : HeroListComponent},
                             {path : 'heroDetail/:id', component : HeroDetailComponent},
                             {path : 'studentDetail/:id', component : StudentDetailComponent},
                             {path : 'employees', component : EmployeeListComponent},
                             {path : 'employeeDetail/:id', component : EmployeeDetailComponent}
                          ];

@NgModule({
    imports: [ RouterModule.forRoot(routes)],
    exports : [RouterModule]
})

export class AppRoutingModule { }
