import { RACES } from './../mocks';
import { Race } from './race';
import { Injectable } from '@angular/core'; //allow dependency injection (re-use created object)
import { Http } from '@angular/http'; //used for get data from Internet WS
import 'rxjs/add/operator/map';

@Injectable()
export class RacingDataService {

	constructor(private http: Http) {}

	getRaces() {
		//using mock file
		//return RACES;
		
		//using GET request
		return this.http.get('app/races/races.json')
			.map(response => <Race[]>response.json().racesData)
	}
}