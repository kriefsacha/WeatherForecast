import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-today-weather-info',
  templateUrl: './today-weather-info.component.html',
  styleUrls: ['./today-weather-info.component.scss']
})
export class TodayWeatherInfoComponent implements OnInit {
  @Input() date: Date = new Date();
  @Input() cityName = '';
  @Input() icon = '';
  @Input() weather = '';
  @Input() temp = 0;
  constructor() { }

  ngOnInit(): void {
  }

}
