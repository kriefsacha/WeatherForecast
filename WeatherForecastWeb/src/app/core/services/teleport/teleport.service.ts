import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { City } from '../../models/city.model';
import { Picture } from '../../models/picture.model';
import { Location } from '../../models/location.model';

@Injectable({
  providedIn: 'root',
})
export class TeleportService {
  baseApiUrl = 'https://api.teleport.org/api/cities/';
  constructor(private http: HttpClient) {}

  getCities(): Observable<City[]> {
    return new Observable((observer) => {
      this.http.get<any>(this.baseApiUrl).subscribe({
        next: (res) => {
          observer.next(res['_embedded']['city:search-results']);
        },
        error: (err) => {
          console.log(err);
          observer.error(err);
        },
      });
    });
  }

  getPicture(city: City): Observable<Picture> {
    return new Observable((observer) => {
      this.http.get(city._links['city:item'].href).subscribe({
        next: (res: any) => {
          if (res._links['city:urban_area']) {
            this.http.get(res._links['city:urban_area'].href).subscribe({
              next: (res: any) => {
                this.http.get(res._links['ua:images'].href).subscribe({
                  next: (res: any) => {
                    observer.next(res.photos[0].image);
                    observer.complete();
                  },
                  error: (err) => {
                    console.log(err);
                  },
                });
              },
              error: (err) => {
                console.log(err);
              },
            });
          } else {
            observer.next();
            observer.complete();
          }
        },
        error: (err) => {
          console.log(err);
        },
      });
    });
  }

  getTimezone(city: City): Observable<Date> {
    return new Observable((observer) => {
      this.http.get(city._links['city:item'].href).subscribe({
        next: (res: any) => {
          if (res._links['city:timezone']) {
            this.http.get(res._links['city:timezone'].href).subscribe({
              next: (res: any) => {
                this.http.get(res._links['tz:offsets-now'].href).subscribe({
                  next: (res: any) => {
                    let now = new Date();
                    let currentOffset = now.getTimezoneOffset();
                    let cityOffset = res.base_offset_min + currentOffset;

                    let date = new Date(
                      new Date().getTime() + cityOffset * 60 * 1000
                    );
                    observer.next(date);
                    observer.complete();
                  },
                  error: (err) => {
                    console.log(err);
                  },
                });
              },
              error: (err) => {
                console.log(err);
              },
            });
          }
        },
        error: (err) => {
          console.log(err);
        },
      });
    });
  }

  getLocation(city: City): Observable<Location> {
    return new Observable((observer) => {
      this.http.get(city._links['city:item'].href).subscribe({
        next: (res: any) => {
          observer.next(res.location.latlon);
          observer.complete();
        },
        error: (err) => {
          console.log(err);
        },
      });
    });
  }
}
