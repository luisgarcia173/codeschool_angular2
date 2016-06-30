import { Component } from '@angular/core';
import { Race } from './race';
import { RacingDataService } from './racing-data.service';

@Component({
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
})
export class RacesComponent {
	//attributes
	heading = "Ultra Racing Schedule";
	cash = 10000;
	races : Race[];

	// used for dependency injection (scalable and testable)
	constructor(private racingDataService: RacingDataService) {}

	// Better option than Constructor
	ngOnInit() {
		// using mock
		//this.races = this.racingDataService.getRaces();
		
		//using observable
		this.racingDataService.getRaces()
			.subscribe(races => this.races = races);
	}

	//methods
	totalRace() {
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
			return this.races.reduce((prev, current, index) => ++index, 0);		
		} else {
			return 0;
		}
	}

	totalCost() {
		if (Array.isArray(this.races)) {
			return this.races.reduce((prev, current) => prev + (current.isRacing ? current.entryFee : 0), 0);		
		} else {
			return 0;
		}
	}

	cashLeft() {
    return this.cash - this.totalCost();
  }

  cancelRace(race: Race) {
  	race.isRacing = false;
  }

  enterRace(race: Race) {
  	let cash = this.cashLeft();
  	if (cash > race.entryFee) {
  		race.isRacing = true;
  	} else {
  		alert("You don't have enough cash");
  	}
  }

}