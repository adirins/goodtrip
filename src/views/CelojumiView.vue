<template>
  <section class="max-w-7xl mx-auto px-6 py-16 grid gap-6">
    <h1 class="text-4xl font-bold text-blue-800  text-center">
      Pieejamie ceļojumi
    </h1>

    <div class="mb-6 flex gap-4 justify-center">
      <!-- Vienkāršs filtrs pēc sezonas -->
      <button
        @click="filterSeason('visi')"
        :class="filter === 'visi' ? activeBtnClass : btnClass"
      >
        Visi
      </button>
      <button
        @click="filterSeason('pavasaris')"
        :class="filter === 'pavasaris' ? activeBtnClass : btnClass"
      >
        Pavasaris
      </button>
      <button
        @click="filterSeason('vasara')"
        :class="filter === 'vasara' ? activeBtnClass : btnClass"
      >
        Vasara
      </button>
      <button
        @click="filterSeason('rudens')"
        :class="filter === 'rudens' ? activeBtnClass : btnClass"
      >
        Rudens
      </button>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
      <div
        v-for="trip in filteredTrips"
        :key="trip.id"
        class="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition"
      >
        <img :src="trip.image" :alt="trip.title" class="w-full h-48 object-cover" />
        <div class="p-4">
          <h2 class="text-xl font-semibold text-blue-700">{{ trip.title }}</h2>
          <p class="text-sm text-gray-600 mt-1">{{ trip.date }}</p>
          <p class="text-gray-700 mt-3">{{ trip.description }}</p>
          <RouterLink
            :to="`/pieteiksanas/${trip.id}`"
            class="inline-block mt-4 text-orange-500 hover:underline font-medium"
          >
            Pieteikties
          </RouterLink>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import {useTripsStore} from "@/stores/trips.js";

const tripsStore = useTripsStore()
const trips = tripsStore.trips

const filter = ref('visi')

const filterSeason = (season: string) => {
  filter.value = season
}

const filteredTrips = computed(() => {
  if (filter.value === 'visi') {
    return trips
  }
  return trips.filter((t) => t.season === filter.value)
})

const btnClass = 'px-4 py-2 rounded-lg border border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white transition'
const activeBtnClass = 'px-4 py-2 rounded-lg bg-orange-500 text-white'
</script>
