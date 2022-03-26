export class EnvironmentConst {
   public static readonly LOCATION_URL = 'https://ipinfo.io/?token=8cf84c42fc812d';

   public static readonly CURRENT_WEATHER_URL = 'https://api.openweathermap.org/data/2.5/weather?q={location}&APPID=1d20414723ae8c22e00640527c26ede8';

   public static readonly OTHER_WEATHER_URL = 'https://api.openweathermap.org/data/2.5/forecast?q={location}&APPID=1d20414723ae8c22e00640527c26ede8';

   public static readonly MONTH_NAMES_SHORT = [
      'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
   ];

   public static readonly DAY_NAMES_SHORT = [
      'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'
   ];
} 