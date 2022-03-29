export interface CurrentWeather {
   weather: [
      {
         main: string,
         icon: string
      }
   ],
   main: {
      temp: number,
      feels_like: number,
      pressure: number,
      humidity: number,
   },
   wind: {
      speed: number,
   },
   sys: {
      sunrise: number,
      sunset: number,
   },
   visibility: number,
   rain: {},
   snow: {}
}