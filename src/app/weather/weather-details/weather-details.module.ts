import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WeatherDetailsComponent } from './weather-details.component';
import { ApplicationPipesModule } from 'src/app/shared/pipes.module';




@NgModule({
  declarations: [
    WeatherDetailsComponent,
  ],
  imports: [
    CommonModule,
    ApplicationPipesModule,

  ],
  exports: [
    WeatherDetailsComponent
  ]
})
export class WeatherDetailsModule { }
