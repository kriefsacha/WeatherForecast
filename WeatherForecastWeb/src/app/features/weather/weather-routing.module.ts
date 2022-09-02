import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainViewComponent } from './pages/main-view/main-view.component';
import { WeatherViewComponent } from './pages/weather-view/weather-view.component';

const routes: Routes = [
  {
    path: '',
    component: MainViewComponent,
  },
  {
    path: 'weather-view',
    component: WeatherViewComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WeatherRoutingModule {}
