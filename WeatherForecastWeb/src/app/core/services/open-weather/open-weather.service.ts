import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OpenWeatherService {
  baseApiUrl = 'https://api.openweathermap.org/data/2.5/';
  apiKey = environment.openWeatherApiKey;
  constructor(private http: HttpClient) { }

  getWeather(latitude: number, longitude: number): Observable<any> {
    return this.http.get(this.baseApiUrl + 'forecast?lat=' + latitude + '&lon=' + longitude + '&appid=' + this.apiKey + '&units=metric');
  }
}
