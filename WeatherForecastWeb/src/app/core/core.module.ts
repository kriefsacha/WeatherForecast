import { NgModule } from '@angular/core';
import { TeleportService } from './services/teleport/teleport.service';
import { OpenWeatherService } from './services/open-weather/open-weather.service';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule
  ],
  exports: [],
  providers: [TeleportService, OpenWeatherService]
})
export class CoreModule {}