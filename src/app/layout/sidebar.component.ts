import {Component} from "@angular/core";
declare var __moduleName: string;
@Component({
    moduleId:__moduleName,
    selector: 'app-sidebar',
    template: `
        <div class="demo-drawer mdl-layout__drawer mdl-color--blue-grey-900 mdl-color-text--blue-grey-50">
            <user-profile class="demo-drawer-header">
            </user-profile>
            <app-menu class="demo-navigation mdl-navigation mdl-color--blue-grey-800">
            </app-menu>
        </div>
    `
})
export class SidebarComponent {}
