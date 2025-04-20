import { defineStore } from "pinia";
import axios from "axios";
import { app } from "@/main.ts";
import { OneCallWeather, WeatherState, WeatherRequestOptions} from "@/types/weatherTypes.ts";

const API_KEY = "5796abbde9106b7da4febfae8c44c232";
const BASE_URL = "https://api.openweathermap.org/data/2.5";

export const useWeatherStore = defineStore("weatherStore", {
  id: "weatherStore",
  state: (): WeatherState => ({
    weatherLoading: false,
    currentWeather: null,
    error: null,
    units: "metric",
  }),

  actions: {
    getCurrentWeather({lat, lon }: WeatherRequestOptions): Promise<OneCallWeather> {
      this.weatherLoading = true;
      this.error = null;

      const params = {
        lat,
        lon,
        appid: API_KEY,
        units: this.units,
        exclude: "minutely,hourly,alerts"
      };

      return new Promise((resolve, reject) => {
        axios
          .get<OneCallWeather>(`${BASE_URL}/onecall`, { params })
          .then((response) => {
            this.currentWeather = response.data;

            app.config.globalProperties.$router.push({
              name: "home",
              query: {
                ...app.config.globalProperties.$route.query,
                lat,
                lon
              }
            });

            resolve(response.data);
          })
          .catch((error) => {
            const unitsTmp = app.config.globalProperties.$route.query.units

            app.config.globalProperties.$router.push({
              name: "home",
              ...( unitsTmp && { query: { units: unitsTmp }})
            })

            this.error = axios.isAxiosError(error)
              ? error.response?.data?.message || error.message
              : "Weather could not be fetched.";

            console.error("Current weather fetch error:", error);

            reject(error);
          })
          .finally(() => {
            this.weatherLoading = false;
          });
      });
    },
  },
});
