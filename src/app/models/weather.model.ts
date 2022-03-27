export class WeatherModel {
   location: {
      country: string;
      city: string;
      date: string;
      day: string;
      time: string
   } | undefined;
   currentWeather: {
      weaterType: string;
      temperature: string;
      wind: string;
      hum: string;
      rain: string
   } | undefined;
   nextDays: [
      {
         temperature: string;
         weaterType: string
         day: string;
      }
   ] | undefined;
}