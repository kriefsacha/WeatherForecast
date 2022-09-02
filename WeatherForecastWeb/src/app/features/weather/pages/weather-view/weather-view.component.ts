import { Component, OnInit } from '@angular/core';
import { City } from 'src/app/core/models/city.model';
import { DataService } from 'src/app/core/services/data/data.service';
import { OpenWeatherService } from 'src/app/core/services/open-weather/open-weather.service';
import { Location } from 'src/app/core/models/location.model';
@Component({
  selector: 'app-weather-view',
  templateUrl: './weather-view.component.html',
  styleUrls: ['./weather-view.component.scss'],
})
export class WeatherViewComponent implements OnInit {
  currentCity: City = new City();
  currentLocation: Location = new Location();
  currentTimezone: Date = new Date();
  weather: any;
  fiveDaysWeather: any[] = [];
  constructor(
    private data: DataService,
    private openWeatherService: OpenWeatherService
  ) {}

  ngOnInit(): void {
    this.currentCity = this.data.currentCity;
    this.currentLocation = this.data.currentLocation;
    this.currentTimezone = this.data.currentTimezone;
    this.openWeatherService
      .getWeather(this.currentLocation.latitude, this.currentLocation.longitude)
      .subscribe({
        next: (res) => {
          this.weather = res;
          this.initFiveDaysArray();
        },
        error: (err) => {
          console.log(err);
        },
      });
  }

  initFiveDaysArray() {
    for (let i = 0; i < this.weather.list.length; i = i + 8) {
      this.fiveDaysWeather.push(this.weather.list[i]);
    }
  }
}
