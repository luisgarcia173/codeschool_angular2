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
var racing_data_service_1 = require('./racing-data.service');
var RacesComponent = (function () {
    // used for dependency injection (scalable and testable)
    function RacesComponent(racingDataService) {
        this.racingDataService = racingDataService;
        //attributes
        this.heading = "Ultra Racing Schedule";
        this.cash = 10000;
    }
    // Better option than Constructor
    RacesComponent.prototype.ngOnInit = function () {
        // using mock
        //this.races = this.racingDataService.getRaces();
        var _this = this;
        //using observable
        this.racingDataService.getRaces()
            .subscribe(function (races) { return _this.races = races; });
    };
    //methods
    RacesComponent.prototype.totalRace = function () {
        /* former way
        let sum = 0;
        for (let race of this.races) {
            sum++;
        }
        return sum;*/
        /* reducer former way
        return this.races.reduce(function(prev, current, index) { return ++index;}, 0);*/
        /* reducer faster way*/
        if (Array.isArray(this.races)) {
            return this.races.reduce(function (prev, current, index) { return ++index; }, 0);
        }
        else {
            return 0;
        }
    };
    RacesComponent.prototype.totalCost = function () {
        if (Array.isArray(this.races)) {
            return this.races.reduce(function (prev, current) { return prev + (current.isRacing ? current.entryFee : 0); }, 0);
        }
        else {
            return 0;
        }
    };
    RacesComponent.prototype.cashLeft = function () {
        return this.cash - this.totalCost();
    };
    RacesComponent.prototype.cancelRace = function (race) {
        race.isRacing = false;
    };
    RacesComponent.prototype.enterRace = function (race) {
        var cash = this.cashLeft();
        if (cash > race.entryFee) {
            race.isRacing = true;
        }
        else {
            alert("You don't have enough cash");
        }
    };
    RacesComponent = __decorate([
        core_1.Component({
            selector: 'my-races',
            /*template: `
                <p>There are {{totalRace()}} total races in this event.</p>
                <ul>
                    <li *ngFor="let race of races">
                        <h2>{{race.name | uppercase}}</h2>
                        <p>{{race.date | date:"MMM d, y, h:MM a"}}</p>
                        <p>{{race.about}}</p>
                        <p>{{race.entryFee | currency:'USD':true}}</p>
                        <p *ngIf="race.racers > 0">About {{race.racers}} racers</p>
                        <p *ngIf="race.racers === 0">No racers yet</p>
                        <button *ngIf="!race.isRacing">Enter Race</button>
                    <h3 *ngIf="race.isRacing">Already Racing</h3>
                    </li>
                <ul>
                <h2>Total cost: {{totalCost() | currency:'USD':true}}</h2>
            `*/
            templateUrl: 'app/races/races.component.html',
            styleUrls: ['app/races/races.component.css']
        }), 
        __metadata('design:paramtypes', [racing_data_service_1.RacingDataService])
    ], RacesComponent);
    return RacesComponent;
}());
exports.RacesComponent = RacesComponent;
//# sourceMappingURL=races.component.js.map