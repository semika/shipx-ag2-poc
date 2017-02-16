import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'; 

import { StudentListCoponent } from './students/list/student-list.component';
import { HeroListComponent } from './heroes/list/hero-list.component';
import { HeroDetailComponent } from './heroes/detail/hero-detail.component';
import { StudentDetailComponent } from './students/detail/student-detail.component';

const routes: Routes =    [
                             {path : '', redirectTo : '/', pathMatch : 'full'},
                             {path : 'students', component : StudentListCoponent}, 
                             {path : 'heroes', component : HeroListComponent},
                             {path : 'heroDetail/:id', component : HeroDetailComponent},
                             {path : 'studentDetail/:id', component : StudentDetailComponent}
                          ];

@NgModule({ 
    imports: [ RouterModule.forRoot(routes)],
    exports : [RouterModule] 
})  

export class AppRoutingModule { } 