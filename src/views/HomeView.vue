<template>
  <section class="bg-blue-50 text-gray-800">
    <div class="max-w-7xl mx-auto px-6 py-20 text-center">
      <h1 class="text-4xl md:text-5xl font-bold text-blue-700 mb-6">
        Piedzīvojumi, kas paliek atmiņā
      </h1>
      <p class="text-lg md:text-xl mb-8">
        Pievienojies neformāliem pārgājieniem un atklāj Eiropas takas kopā ar citiem līdzbraucējiem!
      </p>
      <RouterLink
        to="/celjojumi"
        class="inline-block px-6 py-3 rounded-xl bg-orange-500 text-white hover:bg-orange-600 transition text-lg"
      >
        Skatīt braucienus
      </RouterLink>
    </div>
  </section>

  <section class="max-w-7xl mx-auto px-6 py-16">
    <h2 class="text-3xl font-semibold text-gray-900 mb-8 text-center">Aktuālie ceļojumi</h2>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div
        v-for="trip in trips"
        :key="trip.id"
        class="bg-white shadow-lg rounded-2xl overflow-hidden hover:shadow-xl transition"
      >
        <img :src="trip.image" :alt="trip.title" class="w-full h-48 object-cover" />
        <div class="p-4">
          <h3 class="text-xl font-semibold text-blue-700">{{ trip.title }}</h3>
          <p class="text-sm text-gray-600 mt-1">{{ trip.dates }}</p>
          <p class="text-gray-700 mt-3">{{ trip.description }}</p>
          <RouterLink
            :to="`/celjojumi/${trip.id}`"
            class="inline-block mt-4 text-orange-500 hover:underline font-medium"
          >
            Vairāk
          </RouterLink>
        </div>
      </div>
    </div>
  </section>

  <section class="bg-white py-20 border-t">
    <div class="max-w-4xl mx-auto text-center px-6">
      <h2 class="text-3xl font-bold text-gray-900 mb-4">Kas ir GoodTrip.lv?</h2>
      <p class="text-lg text-gray-700">
        GoodTrip.lv ir brīvības pilna ceļošanas platforma – pārgājieni un trekingi ar skaidru plānu,
        kopā ar domubiedriem, ar pieredzi, atbalstu un iedvesmu.
      </p>
    </div>
  </section>
</template>

<script setup lang="ts">
const trips = [
  {
    id: '1',
    title: 'Portugāles piekraste',
    dates: '2025. gada marts',
    description: 'Dabas takas, okeāns un brīvības sajūta gar Rota Vicentina maršrutu.',
    image: 'https://picsum.photos/seed/portugal/600/400',
  },
  {
    id: '2',
    title: 'Alpu pārgājiens',
    dates: '2025. gada jūlijs',
    description: 'Augstkalnu piedzīvojums Šveices un Itālijas Alpos ar ainavām kā no pastkartes.',
    image: 'https://picsum.photos/seed/alps/600/400',
  },
  {
    id: '3',
    title: 'Balkānu treks',
    dates: '2025. gada septembris',
    description: 'Mazāk zināmas takas un kalni Albānijā un Melnkalnē.',
    image: 'https://picsum.photos/seed/balkans/600/400',
  },
]
</script>
