import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WeatherInfoComponent } from './weather-info.component';
import { SwitchComponent } from './switch/switch.component';



@NgModule({
  declarations: [
    WeatherInfoComponent,
    SwitchComponent
  ],
  exports: [WeatherInfoComponent],
  imports: [
    CommonModule
  ]
})
export class WeatherInfoModule { }
