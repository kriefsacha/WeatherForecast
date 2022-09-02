import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  currentCity: any;
  currentLocation: any;
  currentTimezone: Date = new Date();

  constructor() { }
}
