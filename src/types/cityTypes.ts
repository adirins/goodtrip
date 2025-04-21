export interface LocalNames {
  [languageCode: string]: string;
}

export interface Location {
  name: string;
  local_names: LocalNames;
  country: string;
  lat: number;
  lon: number;
  state: string;
}

export interface CityStoreState {
  cityListLoading: boolean;
  cityList: Location[] | null;
  selectedCity: Location | null;
  error: string | null;
  controller: AbortController | null;
}

export interface CityListParams {
  city?: string;
  units?: "standard" | "metric" | "imperial";
  lat?: number | string;
  lon?: number | string;
}
