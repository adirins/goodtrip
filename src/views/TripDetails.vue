<template>
  <section class="max-w-4xl mx-auto px-6 py-12">
    <button @click="$router.back()" class="mb-6 text-blue-600 hover:underline">&larr; Atpakaļ</button>
    <div v-if="trip">
      <h1 class="text-4xl font-bold text-blue-700 mb-4">{{ trip.title }}</h1>
      <img :src="trip.image" :alt="trip.title" class="w-full h-64 object-cover rounded-lg mb-6" />
      <p class="text-gray-700 mb-4">{{ trip.description }}</p>
      <p class="text-sm text-gray-500 mb-6">Datumi: {{ trip.dates }}</p>

      <!-- Piemēram, papildu informācija -->
      <h2 class="text-2xl font-semibold mb-3">Maršruts un programma</h2>
      <p class="mb-4">
        Šeit varētu būt detalizēts maršruts, dienas aktivitātes, sagatavojamā inventāra saraksts u.c.
      </p>

      <router-link
        to="/pieteiksanas"
        class="inline-block px-6 py-3 rounded-xl bg-orange-500 text-white hover:bg-orange-600 transition"
      >
        Pieteikties braucienam
      </router-link>
    </div>

    <div v-else class="text-center text-gray-500">
      Ceļojums netika atrasts.
    </div>
  </section>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'
import { useTripsStore } from '@/stores/trips.js'

const tripsStore = useTripsStore()
const trips = tripsStore.trips

const route = useRoute()
const tripId = route.params.id as string

const trip = trips.find(t => t.id === tripId)
</script>
