import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { WeatherModel } from '../models/weather.model';
import { WeatherService } from '../services/weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit, OnDestroy {

  private _destroy: Subject<void> = new Subject();
  dataIsLoaded = false;
  weatherData: WeatherModel | undefined;


  constructor(private weatherService: WeatherService) { }

  ngOnInit(): void {
    this.weatherService.weatherData$.pipe(takeUntil(this._destroy)).subscribe(weatherData => {
      this.weatherData = weatherData;

      if (weatherData.nextDays) {
        this.dataIsLoaded = true;
      }
    });
  }

  ngOnDestroy(): void {
    this._destroy.next();
    this._destroy.complete();
  }
}
