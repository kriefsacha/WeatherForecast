import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-weather-info',
  templateUrl: './weather-info.component.html',
  styleUrls: ['./weather-info.component.scss']
})
export class WeatherInfoComponent implements OnInit {
  @Input() icon: string = '';
  @Input() temp: number = 0;
  @Input() date: Date = new Date();
  constructor() { }

  ngOnInit(): void {
  }

}
