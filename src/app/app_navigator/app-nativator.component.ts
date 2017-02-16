import { Component, Directive, OnInit} from '@angular/core';

import { AppNavigatorDataService } from './app-navigator-data.service';

declare var __moduleName: string;
@Component ({
    moduleId : __moduleName,
    selector : 'app-navigator',
    templateUrl : './app-nativator.component.html',
    styleUrls : ['./app-nativator.component.css'] 
})

export class AppNavigatorComponent implements OnInit {

    navitems : {}[]; 
    
    constructor(private appNavigatorDataService: AppNavigatorDataService)  { }

    ngOnInit() : void {
        this.getNavigatorItems();
    }

    getNavigatorItems() : void {
      this.appNavigatorDataService.getNavigatorItems().then(navitems => this.navitems = navitems);
    }
}