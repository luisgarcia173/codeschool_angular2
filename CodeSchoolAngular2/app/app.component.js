"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var races_component_1 = require('./races/races.component');
var racing_data_service_1 = require('./races/racing-data.service');
var http_1 = require('@angular/http'); //used for get data from Internet WS
var AppComponent = (function () {
    function AppComponent() {
        this.heading = "Ultra Racing Schedule";
    }
    AppComponent = __decorate([
        //used for get data from Internet WS
        core_1.Component({
            selector: 'my-app',
            template: "\n\t\t<h1>{{heading}}</h1>\n\t\t<my-races></my-races>",
            directives: [races_component_1.RacesComponent],
            providers: [racing_data_service_1.RacingDataService, http_1.HTTP_PROVIDERS] //using dependecy injection
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map