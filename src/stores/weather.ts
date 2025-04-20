import { defineStore } from "pinia";

const API_KEY = "5796abbde9106b7da4febfae8c44c232";
const BASE_URL = "https://api.openweathermap.org/data/2.5";

export const useWeatherStore = defineStore("weatherStore", {
  state: (): {
    units: string;
  } => ({
    units: "metric",
  }),

  actions: {

  },
});
