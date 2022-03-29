import { Pipe, PipeTransform } from '@angular/core';


@Pipe({ name: 'temperature' })
export class TemperaturePipe implements PipeTransform {
   transform(temperatureK: number | undefined, isCelsiumTemperature: boolean): string {
      if (isCelsiumTemperature) {
         return temperatureK ? (temperatureK - 273.15).toFixed(0) : ''; // Celsium
      } else {
         return temperatureK ? (9 / 5 * (temperatureK - 273.15) + 32).toFixed(0) : ''; // Fahrenheit
      }
   }
}
