import { Component, OnInit } from '@angular/core';
import { WeatherService } from 'src/app/services/weather.service';


@Component({
  selector: 'app-switch',
  templateUrl: './switch.component.html',
  styleUrls: ['./switch.component.scss']
})
export class SwitchComponent {

  constructor(private weatherService: WeatherService) { }

  toggle(): void {
    this.weatherService.toggleTemperatureType();
  }

}
