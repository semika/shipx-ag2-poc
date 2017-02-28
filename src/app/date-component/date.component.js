System.register(["@angular/core"], function (exports_1, context_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __moduleName = context_1 && context_1.id;
    var core_1, DateComponent;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            }
        ],
        execute: function () {
            DateComponent = (function () {
                function DateComponent() {
                    this.dd = '';
                    this.mm = '';
                    this.yyyy = '';
                }
                DateComponent.prototype.agInit = function (params) {
                    this.params = params;
                };
                DateComponent.prototype.ngOnDestroy = function () {
                    console.log("Destroying DateComponent");
                };
                DateComponent.prototype.onResetDate = function () {
                    this.dd = '';
                    this.mm = '';
                    this.yyyy = '';
                    this.date = null;
                    this.params.onDateChanged();
                };
                DateComponent.prototype.onDateChanged = function (on, newValue) {
                    this.date = this.parseDate(on === 'dd' ? newValue : this.dd, on === 'mm' ? newValue : this.mm, on === 'yyyy' ? newValue : this.yyyy);
                    this.params.onDateChanged();
                };
                DateComponent.prototype.getDate = function () {
                    return this.date;
                };
                DateComponent.prototype.setDate = function (date) {
                    this.dd = date.getDate() + '';
                    this.mm = (date.getMonth() + 1) + '';
                    this.yyyy = date.getFullYear() + '';
                    this.date = date;
                    this.params.onDateChanged();
                };
                //*********************************************************************************
                //          INTERNAL LOGIC
                //*********************************************************************************
                DateComponent.prototype.parseDate = function (dd, mm, yyyy) {
                    //If any of the three input date fields are empty, stop and return null
                    if (dd.trim() === '' || mm.trim() === '' || yyyy.trim() === '') {
                        return null;
                    }
                    var day = Number(dd);
                    var month = Number(mm);
                    var year = Number(yyyy);
                    var date = new Date(year, month - 1, day);
                    //If the date is not valid
                    if (isNaN(date.getTime())) {
                        return null;
                    }
                    //Given that new Date takes any garbage in, it is possible for the user to specify a new Date
                    //like this (-1, 35, 1) and it will return a valid javascript date. In this example, it will
                    //return Sat Dec 01    1 00:00:00 GMT+0000 (GMT) - Go figure...
                    //To ensure that we are not letting non sensical dates to go through we check that the resultant
                    //javascript date parts (month, year and day) match the given date fields provided as parameters.
                    //If the javascript date parts don't match the provided fields, we assume that the input is non
                    //sensical... ie: Day=-1 or month=14, if this is the case, we return null
                    //This also protects us from non sensical dates like dd=31, mm=2 of any year
                    if (date.getDate() != day || date.getMonth() + 1 != month || date.getFullYear() != year) {
                        return null;
                    }
                    return date;
                };
                return DateComponent;
            }());
            DateComponent = __decorate([
                core_1.Component({
                    selector: 'ag-full-width-grid',
                    templateUrl: 'app/date-component/date.component.html',
                    styleUrls: ['app/date-component/date.component.css'],
                })
            ], DateComponent);
            exports_1("DateComponent", DateComponent);
        }
    };
});
//# sourceMappingURL=date.component.js.map