import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WeatherComponent } from './weather.component';
import { WeatherInfoModule } from './weather-info/weather-info.module';
import { WeatherInfoComponent } from './weather-info/weather-info.component';



@NgModule({
  declarations: [WeatherComponent],
  exports: [WeatherComponent],
  imports: [
    CommonModule,
    WeatherInfoModule
  ],
  providers: [WeatherInfoComponent]
})
export class WeatherModule { }
