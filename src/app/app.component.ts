import { Component } from '@angular/core';

declare var __moduleName: string;
@Component({
   moduleId : __moduleName,
   selector: 'my-app',
   templateUrl: './app.component.html',
//    template: `
//    <div class="demo-layout mdl-layout mdl-js-layout mdl-layout--fixed-drawer mdl-layout--fixed-header">
//       <app-header></app-header>
//       <app-sidebar></app-sidebar>
//       <main class="mdl-layout__content mdl-color--grey-100">
//             <router-outlet></router-outlet>
//       </main>
//     </div>`,
   styleUrls:['./app.component.css']
})
export class AppComponent  { 
    title = 'ShipX AG2 POC'; 
}
