import { Component } from '@angular/core';
import { RacesComponent } from './races/races.component';
import { RacingDataService } from './races/racing-data.service';
import { HTTP_PROVIDERS } from '@angular/http'; //used for get data from Internet WS

@Component({
	selector: 'my-app',
	template: `
		<h1>{{heading}}</h1>
		<my-races></my-races>`,
	directives: [RacesComponent],
	providers: [RacingDataService, HTTP_PROVIDERS] //using dependecy injection
})
export class AppComponent {
	heading = "Ultra Racing Schedule";
}
