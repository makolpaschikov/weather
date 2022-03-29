import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject, delay, Observable, of, switchMap } from "rxjs";
import { EnvironmentConst } from "../config/enviroment.const";
import { CurrentWeather } from "../models/current-weather.model";
import { LocationData } from "../models/location-data.model";
import { WeatherModel } from "../models/weather.model";







@Injectable({
   providedIn: 'root',
})
export class WeatherService {

   private _isCelsiumTemperature$ = new BehaviorSubject<boolean>(true);
   private _weather$ = new BehaviorSubject<WeatherModel>(new WeatherModel());

   isCelsiumTemperature$ = this._isCelsiumTemperature$.asObservable();
   weatherData$ = this._weather$.asObservable();

   constructor(private _http: HttpClient) { }

   toggleTemperatureType() {
      const currentValue = this._isCelsiumTemperature$.getValue();
      this._isCelsiumTemperature$.next(!currentValue);
   }

   loadData(): void {
      const weather: WeatherModel = new WeatherModel();

      this.getUserLocation()
         .pipe(
            switchMap(location => {
               const date = new Date();
               weather.location = {
                  ...location,
                  date: `${date.getDate()} ${EnvironmentConst.MONTH_NAMES_SHORT[date.getMonth()]} ${date.getFullYear()}`,
                  day: `${EnvironmentConst.DAY_NAMES_SHORT[date.getDay()]}`,
               }

               return this.getCurrentWeater(weather.location);
            }),
            switchMap(currentWeather => {
               let precipitation = 0;
               if (currentWeather.rain) {
                  precipitation = parseFloat(Object.values(currentWeather.rain)[0] as string);
               } else if (currentWeather.snow) {
                  precipitation = parseFloat(Object.values(currentWeather.snow)[0] as string);
               }

               weather.currentWeather = {
                  icon: `${currentWeather.weather[0].icon}.svg`,
                  weaterType: currentWeather.weather[0].main,
                  temperature: currentWeather.main.temp,
                  wind: currentWeather.wind.speed,
                  hum: currentWeather.main.humidity,
                  precipitation: precipitation,
                  visibility: currentWeather.visibility / 1000,
                  sunrise: currentWeather.sys.sunrise,
                  sunset: currentWeather.sys.sunset,
               }

               return of(true)
            })
         ).subscribe(currentWeather => {
            this._weather$.next(weather);
         })
   }

   private getUserLocation(): Observable<LocationData> {
      return this._http.get<LocationData>(EnvironmentConst.LOCATION_URL);
   }

   private getCurrentWeater(location: LocationData): Observable<CurrentWeather> {
      let url = EnvironmentConst.CURRENT_WEATHER_URL.replace('{location}', `${location.city},${location.country}`)
      console.log(url);

      return this._http.get<CurrentWeather>(url);
   }

}