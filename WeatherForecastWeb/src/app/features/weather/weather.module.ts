import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { MainViewComponent } from './pages/main-view/main-view.component';
import { WeatherViewComponent } from './pages/weather-view/weather-view.component';
import { WeatherRoutingModule } from './weather-routing.module';
import { CityCardComponent } from './pages/main-view/city-card/city-card.component';
import { CommonModule } from '@angular/common';
import { WeatherInfoComponent } from './pages/weather-view/weather-info/weather-info.component';
import { TodayWeatherInfoComponent } from './pages/weather-view/today-weather-info/today-weather-info.component';


@NgModule({
  declarations: [
    MainViewComponent,
    WeatherViewComponent,
    CityCardComponent,
    WeatherInfoComponent,
    TodayWeatherInfoComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    WeatherRoutingModule
  ],
  exports: [CommonModule],
  providers: [],
  bootstrap: []
})
export class WeatherModule { }
