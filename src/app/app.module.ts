import { NgModule, CUSTOM_ELEMENTS_SCHEMA }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { PolymerElement } from '@vaadin/angular2-polymer';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

//Application modules
import { AppRoutingModule } from './app-routing.module';

import { AppComponent }  from './app.component';
import { AppNavigatorComponent } from './app_navigator/app-nativator.component'
import { StudentListCoponent } from './students/list/student-list.component';
import { StudentDetailComponent} from './students/detail/student-detail.component';
import { HeroListComponent } from './heroes/list/hero-list.component';
import { HeroDetailComponent } from './heroes/detail/hero-detail.component';

import { HeaderComponent } from './layout/header.component';
import { MenuComponent} from './layout/menu.component';
import { SidebarComponent } from './layout/sidebar.component';
import { UserProfileComponent } from './layout/profile.component';

import { AppNavigatorDataService} from './app_navigator/app-navigator-data.service';  
import { StudentService } from './students/service/student.service';
import { HeroService } from './heroes/service/hero.service';

import { MDL} from './material-design-lite-upgrade-element';

const powerList = ['Really Smart', 'Super Flexible', 'Super Hot', 'Weather Changer'];
const genderList = [{'key':'M', 'value':'Male'} , {'key':'F', 'value':'Female'}];

@NgModule({
  imports:      [ BrowserModule , 
                  AppRoutingModule , 
                  FormsModule,
                  HttpModule],
                  
  declarations: [ AppComponent,
                  AppNavigatorComponent, 
                  StudentListCoponent,
                  StudentDetailComponent,
                  HeroListComponent,
                  HeroDetailComponent,
                  HeaderComponent,
                  MenuComponent,
                  SidebarComponent,
                  UserProfileComponent,
                  MDL,
                  PolymerElement('px-spinner'),
                  PolymerElement('px-app-nav')],
  bootstrap:    [ AppComponent ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  providers : [AppNavigatorDataService, 
               StudentService, 
               HeroService,
               {provide : 'powerListToken', useValue : powerList}, 
               {provide : 'genderList', useValue : genderList}
               ] // services can be provided here for application level ones.
})
export class AppModule { }
