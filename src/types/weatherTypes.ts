export interface OneCallWeather {
  lat: number;
  lon: number;
  timezone: string;
  timezone_offset: number;
  current: {
    dt: number;
    temp: number;
    feels_like: number;
    humidity: number;
    pressure: number;
    wind_speed: number;
    weather: {
      description: string;
      icon: string;
      main: string;
    }[];
  };
  daily: {
    dt: number;
    sunrise: number;
    sunset: number;
    temp: {
      day: number;
      min: number;
      max: number;
      night: number;
      eve: number;
      morn: number;
    };
    feels_like: {
      day: number;
      night: number;
      eve: number;
      morn: number;
    };
    pressure: number;
    humidity: number;
    wind_speed: number;
    weather: {
      main: string;
      description: string;
      icon: string;
    }[];
    clouds: number;
    pop: number;
    rain?: number;
    snow?: number;
    uvi: number;
  }[];
}

export type Units = 'standard' | 'metric' | 'imperial';

export interface WeatherState {
  weatherLoading: boolean;
  currentWeather: OneCallWeather | null;
  error: string | null;
  units: Units;
}

export interface WeatherRequestOptions {
  lat: string | number;
  lon: string | number;
}
