export class WeatherModel {
   location: {
      country: string;
      city: string;
      date: string;
      day: string;
   } | undefined;
   currentWeather: {
      icon: string
      weaterType: string;
      temperature: number;
      wind: number;
      hum: number;
      precipitation: number;
      visibility: number;
      sunrise: number;
      sunset: number;
   } | undefined;
   nextDays: [
      {
         temp: number,
         weatherType: string,
         icon: string,
         day: string,
      }
   ] | undefined;
}