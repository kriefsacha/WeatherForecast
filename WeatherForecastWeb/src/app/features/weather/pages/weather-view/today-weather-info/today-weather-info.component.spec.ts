import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodayWeatherInfoComponent } from './today-weather-info.component';

describe('TodayWeatherInfoComponent', () => {
  let component: TodayWeatherInfoComponent;
  let fixture: ComponentFixture<TodayWeatherInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodayWeatherInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TodayWeatherInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
