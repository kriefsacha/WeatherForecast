import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { forkJoin, Observable } from 'rxjs';
import { TeleportService } from 'src/app/core/services/teleport/teleport.service';
import { DataService } from 'src/app/core/services/data/data.service';
import { Location } from 'src/app/core/models/location.model';
import { Picture } from 'src/app/core/models/picture.model';
import { City } from 'src/app/core/models/city.model';

@Component({
  selector: 'app-city-card',
  templateUrl: './city-card.component.html',
  styleUrls: ['./city-card.component.scss'],
})
export class CityCardComponent implements OnChanges {
  @Input() city: City = new City();
  picture: Picture = new Picture();
  date: Date = new Date();
  location: Location = new Location();
  constructor(
    private teleportService: TeleportService,
    private data: DataService
  ) {}

  ngOnChanges(changes: SimpleChanges): void {
    this.getCityData().subscribe({
      next: (res) => {
        if (res[0] != undefined) this.picture = res[0];
        else
          this.picture = {
            web: 'assets/default.jpg',
            mobile: 'assets/default.jpg',
          };
        this.date = res[1];
        this.location = res[2];
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  getPicture(): Observable<Picture> {
    if (this.city) {
      return this.teleportService.getPicture(this.city);
    }
    return new Observable();
  }

  getTimezone(): Observable<Date> {
    if (this.city) {
      return this.teleportService.getTimezone(this.city);
    }
    return new Observable();
  }

  getLocation(): Observable<Location> {
    if (this.city) {
      return this.teleportService.getLocation(this.city);
    }
    return new Observable();
  }

  getCityData() {
    return forkJoin([
      this.getPicture(),
      this.getTimezone(),
      this.getLocation(),
    ]);
  }

  seeDetailsClick() {
    this.data.currentCity = this.city;
    this.data.currentLocation = this.location;
    this.data.currentTimezone = this.date;
  }
}
