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
      rain: number;
      sunrise: number;
      sunset: number;
   } | undefined;
   nextDays: [
      {
         temperature: string;
         weaterType: string
         day: string;
      }
   ] | undefined;
}