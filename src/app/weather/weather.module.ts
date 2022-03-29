import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WeatherComponent } from './weather.component';
import { WeatherInfoModule } from './weather-info/weather-info.module';
import { WeatherInfoComponent } from './weather-info/weather-info.component';
import { WeatherDetailsModule } from './weather-details/weather-details.module';
import { WeatherDetailsComponent } from './weather-details/weather-details.component';



@NgModule({
  declarations: [WeatherComponent],
  exports: [WeatherComponent],
  imports: [
    CommonModule,
    WeatherInfoModule,
    WeatherDetailsModule,
  ],
  providers: [WeatherInfoComponent, WeatherDetailsComponent]
})
export class WeatherModule { }
