import {platformBrowserDynamic} from "@angular/platform-browser-dynamic";
import {AppModule} from "./app.module";

import {LicenseManager} from "ag-grid-enterprise/main";
LicenseManager.setLicenseKey("key");

platformBrowserDynamic().bootstrapModule(AppModule);
