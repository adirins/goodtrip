import { defineStore } from "pinia";
import axios from  "axios";
import type { CityListParams, CityStoreState, Location } from "@/types/cityTypes.ts";

const API_KEY = "5796abbde9106b7da4febfae8c44c232";
const BASE_URL = "https://api.openweathermap.org/geo/1.0";

export const useCityStore = defineStore("cityStore", {
  state: (): CityStoreState => ({
    cityListLoading: false,
    cityList: null,
    selectedCity: null,
    controller: null,
    error: null,
  }),

  actions: {
    getCityList({ city }: CityListParams): Promise<Location[]> {
      if (this.controller) {
        this.controller.abort();
      }

      this.cityListLoading = true;
      this.error = null;

      const controller = new AbortController();
      this.controller = controller;

      const params = {
        q: city,
        appid: API_KEY,
        limit: 5
      };

      return new Promise((resolve, reject) => {
        axios
          .get(`${BASE_URL}/direct`, {
            params,
            signal: controller.signal,
          })
          .then((response: Location) => {
              this.cityList = response.data;
              resolve(response.data);
          })
          .catch((error: Error) => {
            this.error = axios.isAxiosError(error)
              ? error.response?.data?.message || error.message
              : "City could not be fetched.";

            console.error("City list fetch error:", error);

            reject(error);
          })
          .finally(() => {
            this.cityListLoading = false;
            this.controller = null;
          });
      });
    },

    getReverseCity({ lat, lon }: CityListParams): Promise<Location> {
      this.error = null;

      const params = {
        lat,
        lon,
        appid: API_KEY,
        limit: 1
      };

      return new Promise((resolve, reject) => {
        axios
          .get(`${BASE_URL}/reverse`, {
            params,
          })
          .then((response: Location) => {
            if(response.data.length) {
              this.selectedCity = response.data[0]
              resolve(response.data);
            } else {
              this.selectedCity = null

              this.error = "City could not be found."
              reject(response.data)
            }
          })
          .catch((error: Error) => {

            this.error = axios.isAxiosError(error)
              ? error.response?.data?.message || error.message
              : "City could not be fetched.";

            console.error("City list fetch error:", error);

            reject(error);
          })
          .finally(() => {
            this.cityListLoading = false;

            this.controller = null;
          });

      });
    },
  },
});



