import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { EnvironmentConst } from "../config/enviroment.const";
import { WeatherModel } from "../models/weather.model";

interface LocationData {
   city: string;
   country: string;
}

@Injectable({
   providedIn: 'root',
})
export class WeatherService {

   private weather$ = new BehaviorSubject<WeatherModel>(new WeatherModel());
   weatherData$ = this.weather$.asObservable();

   constructor(private http: HttpClient) { }

   initData(): void {
      const weather: WeatherModel = new WeatherModel();

      this.getUserLocation().subscribe(location => {
         const date = new Date();
      
         weather.location = {
            ...location,
            date: `${date.getDate()} ${EnvironmentConst.MONTH_NAMES_SHORT[date.getMonth()]} ${date.getFullYear()}`,
            day: `${EnvironmentConst.DAY_NAMES_SHORT[date.getDay()]}`,
            time: this.convertTime(date.getHours(), date.getMinutes())
         }

         this.weather$.next(weather);
      })
   }

   private getUserLocation(): Observable<LocationData> {
      return this.http.get<LocationData>(EnvironmentConst.LOCATION_URL);
   }

   private convertTime(hours: number, minutes: number): string {
      const ampm = hours >= 12 ? 'pm' : 'am';
      hours = hours % 12;
      const strHours = hours ? hours.toString() : '12';
      const strMinutes = minutes < 10 ? '0' + minutes : minutes;

      return `${strHours}:${strMinutes} ${ampm}`;
   }




}