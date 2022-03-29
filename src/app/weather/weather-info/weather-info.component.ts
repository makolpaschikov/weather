import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subject, Subscriber, takeUntil } from 'rxjs';
import { WeatherModel } from 'src/app/models/weather.model';
import { WeatherService } from 'src/app/services/weather.service';

@Component({
  selector: 'app-weather-info',
  templateUrl: './weather-info.component.html',
  styleUrls: ['./weather-info.component.scss']
})
export class WeatherInfoComponent implements OnInit, OnDestroy {

  isCelsiumTemperature = true;
  private _destroy: Subject<void> = new Subject();

  time = new Observable<number>((observer: Subscriber<number>) => {
    setInterval(() => observer.next(new Date().getTime()), 100);
  });

  @Input()
  weatherData: WeatherModel | undefined;

  constructor(private weatherService: WeatherService) { }

  ngOnInit(): void {
    this.weatherService.isCelsiumTemperature$
      .pipe(takeUntil(this._destroy))
      .subscribe(isCel => this.isCelsiumTemperature = isCel)
  }

  ngOnDestroy(): void {
    this._destroy.next();
    this._destroy.complete();
  }

}
