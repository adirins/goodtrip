<script setup lang="ts">
import { useWeatherStore } from "@/stores/weather.ts";

const weatherStore = useWeatherStore()

</script>

<template>
  <div v-if="weatherStore.currentWeather" class="grid gap-2.5">
    <div class="flex gap-1 justify-center">
      icon
    </div>

    <div>
      city and country details
    </div>

    <div>
      weekday and date
    </div>

    <div>
      current temp
    </div>

    <div>
      min / max
    </div>
  </div>
</template>
