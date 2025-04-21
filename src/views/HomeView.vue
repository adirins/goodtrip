<script setup lang="ts">
import {computed, onMounted, type Ref, ref, type UnwrapRef, watch} from "vue";
import { useWeatherStore } from "@/stores/weather.ts";
import { useRoute, useRouter } from "vue-router";
import WeatherCard from "@/components/HomeView/WeatherCard.vue";
import { useCityStore } from "@/stores/city.ts";
import type { OneCallWeather } from "@/types/weatherTypes.ts";
import type { Location } from "@/types/cityTypes.ts";

const weatherStore = useWeatherStore()
const cityStore = useCityStore()
const route = useRoute()
const router = useRouter()

onMounted(() => {
  if( route.query.units ) {
    weatherStore.units = route.query.units
  }

  if(route.query.lat && route.query.lon) {
    cityStore.getReverseCity({lat: route.query.lat, lon: route.query.lon})
      .then((resp: Promise<Location>) => {
        if(resp) {
          checkWeather({lat: route.query.lat, lon: route.query.lon})
        }
      }).catch((err: Error) => { console.error("City fetch error", err); })
  }
})

const isModalOpen = ref(false)

const checkWeather = ({lat, lon}) => {
  weatherStore.getCurrentWeather({lat, lon}).then((resp: Promise<OneCallWeather>)=>{
    if(resp) {
      isModalOpen.value = true
    }
  })
}

const selectedCity = computed({
  get() {
    return cityStore.selectedCity || {}
  },
  set(evt) {
    cityStore.selectedCity = evt

    if(evt) {
      checkWeather({ lat: evt.lat, lon: evt.lon})
    }
  }
})

const cityListTmp = computed(()=>{
  return cityStore.cityList || []
})

const cityQuery: Ref<UnwrapRef<string>, UnwrapRef<string> | string> = ref("")

const updateQuery = (evt: string) => {
  cityQuery.value = evt

  if(evt) {
    cityStore.getCityList({city: evt})
  } else {
    cityStore.cityList = null
  }
}

watch(()=> weatherStore.units,()=>{
  router.push({
    name: route.name,
    query: {... route.query, units: weatherStore.units}
  })
})
</script>

<template>
  <div class="h-full w-full relative grid gap-10 justify-center">
    <div class="w-full max-w-[1024px] xl:max-w-[1536] xl:min-w-[1025px] bg-gray-200 rounded shadow-xl grid gap-2.5 p-5 m-5">
      <h1 class="text-xl font-medium text-gray-700">Weather app</h1>

      <div class="flex flex-wrap gap-10 w-full">
        <BaseComboboxAutocomplete
          class="min-w-[300px] flex-1"
          label="City"
          placeholder="Select city"
          :actionInProgress="cityStore.cityListLoading"
          :options="cityListTmp"
          v-model="selectedCity"
          :query="cityQuery"
          @update-query="updateQuery($event)"
        />

        <BaseSelect
          class="min-w-[300px] flex-1"
          label="Units"
          :options="['metric','standard', 'imperial']"
          v-model="weatherStore.units"
        />
      </div>
    </div>

    <div class="w-full max-w-[1024px] xl:max-w-[1536] xl:min-w-[1025px] grid justify-center">
      <div v-if="cityStore.error">
        {{ cityStore.error }}
      </div>

      <div v-else-if="weatherStore.error">
        {{ weatherStore.error }}
      </div>

      <div v-else-if="!isModalOpen && selectedCity">
        <button
          type="button"
          @click="checkWeather({ lat: cityStore.selectedCity.lat, lon: cityStore.selectedCity.lon})"
          class="rounded-md bg-black/20 px-4 py-2 text-sm font-medium text-white hover:bg-black/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75"
        >
          Re-fetch weather
        </button>
      </div>


    </div>

    <BaseModalDialog v-if="isModalOpen" :is-open="isModalOpen" @close="isModalOpen=!isModalOpen">
      <WeatherCard/>
    </BaseModalDialog>

  </div>
</template>
