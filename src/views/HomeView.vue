<script setup lang="ts">
import {ref, watch} from "vue";
import { useWeatherStore } from "@/stores/weather.ts";
import { useRoute, useRouter } from "vue-router";

const weatherStore = useWeatherStore()
const route = useRoute()
const router = useRouter()

watch(()=> weatherStore.units,()=>{
  router.push({
    name: route.name,
    query: {... route.query, units: weatherStore.units}
  })
})
</script>

<template>
  <div class="h-full mx-auto relative">
    <div class="w-full max-w-[1024px] xl:max-w-[1536] xl:min-w-[1025px] bg-gray-200 rounded shadow-xl grid gap-2.5 p-5 m-5">
      <h1 class="text-xl font-medium text-gray-700">Weather app</h1>

      <div class="flex flex-wrap gap-10 w-full">
        Select city

        <BaseSelect
          class="min-w-[300px] flex-1"
          label="Units"
          :options="['metric','standard', 'imperial']"
          v-model="weatherStore.units"
        />
      </div>
    </div>

  </div>
</template>
