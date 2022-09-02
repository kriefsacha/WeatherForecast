import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { City } from 'src/app/core/models/city.model';
import { TeleportService } from 'src/app/core/services/teleport/teleport.service';

@Component({
  selector: 'app-main-view',
  templateUrl: './main-view.component.html',
  styleUrls: ['./main-view.component.scss']
})
export class MainViewComponent implements OnInit {
  cities$: Observable<City[]> = new Observable();
  searchTxt = ''; 
  constructor(private teleportService: TeleportService) { }

  ngOnInit(): void {
    this.cities$ = this.teleportService.getCities();
  }

  showCity(name: string) {
    return this.searchTxt === '' || name.toLowerCase().indexOf(this.searchTxt.toLowerCase()) > -1;
  }

}
