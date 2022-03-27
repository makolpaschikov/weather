import { Component, Input, OnInit } from '@angular/core';
import { WeatherModel } from 'src/app/models/weather.model';

@Component({
  selector: 'app-weather-info',
  templateUrl: './weather-info.component.html',
  styleUrls: ['./weather-info.component.scss']
})
export class WeatherInfoComponent implements OnInit {

  @Input()
  weatherData: WeatherModel | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
