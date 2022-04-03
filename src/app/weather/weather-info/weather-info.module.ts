import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ApplicationPipesModule } from 'src/app/shared/pipes.module';
import { SwitchComponent } from './switch/switch.component';
import { WeatherInfoComponent } from './weather-info.component';



@NgModule({
  declarations: [
    WeatherInfoComponent,

    SwitchComponent,
  ],
  exports: [WeatherInfoComponent],
  imports: [
    CommonModule,
    ApplicationPipesModule,

  ]
})
export class WeatherInfoModule { }
