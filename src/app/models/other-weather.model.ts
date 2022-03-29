export interface OtherWeather {
   list: [
      {
         main: {
            temp: number,
         },
         weather: [
            {
               main: string,
               icon: string,
            }
         ],
         dt_txt: string,
      }
   ]


}