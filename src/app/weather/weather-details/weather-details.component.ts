import { Component, Input, OnInit } from '@angular/core';
import { WeatherModel } from 'src/app/models/weather.model';

@Component({
  selector: 'app-weather-details',
  templateUrl: './weather-details.component.html',
  styleUrls: ['./weather-details.component.scss']
})
export class WeatherDetailsComponent implements OnInit {

  @Input()
  weatherData: WeatherModel | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
