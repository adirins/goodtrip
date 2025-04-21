<script setup lang="ts">
import { useWeatherStore } from "@/stores/weather";
import { useCityStore } from "@/stores/city";
import { computed } from "vue";

const weatherStore = useWeatherStore()
const cityStore = useCityStore()

const getWeekdayAndDate = computed(()=>{
  if(!weatherStore.currentWeather || !weatherStore.currentWeather?.current?.dt || weatherStore.currentWeather?.timezone_offset) return "no date"

  const date = new Date((weatherStore.currentWeather.current.dt + weatherStore.currentWeather.timezone_offset) * 1000);

  const weekday = date.toLocaleDateString('en-US', { weekday: 'long' });
  const day = date.getUTCDate();

  return `${weekday}, ${day}`;
})

const getTemperatureSymbol = computed(()=>{
  const symbols = {
    metric: "°",
    imperial: " F",
    standard: " K",
  }

  return symbols[weatherStore.units];
})
</script>

<template>
  <div v-if="weatherStore.currentWeather" class="grid gap-2.5">
    <div class="flex gap-1 justify-center">
      <img
        v-for="item in weatherStore.currentWeather.current?.weather"
        :key="item.icon"
        :src="`https://openweathermap.org/img/wn/${item.icon}@2x.png`"
        alt="icon"
        width="150"
        height="150"
      >
    </div>

    <div class="text-center">
      {{cityStore.selectedCity?.name}}, {{cityStore.selectedCity?.country}}
    </div>

    <div class="text-center">
      {{ getWeekdayAndDate }}
    </div>

    <div class="text-center text-[50px] font-bold">
      {{weatherStore.currentWeather.current.temp}} {{getTemperatureSymbol}}
    </div>

    <div class="text-center text-sm">
      {{weatherStore.currentWeather.daily[0].temp.min + getTemperatureSymbol}} / {{weatherStore.currentWeather.daily[0].temp.max + getTemperatureSymbol}}
    </div>
  </div>
</template>
