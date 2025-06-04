<template>
  <section class="max-w-3xl mx-auto px-6 py-16">
    <button @click="$router.back()" class="mb-6 text-blue-600 hover:underline">&larr; Atpakaļ uz blogu</button>

    <article class="bg-white rounded-2xl shadow-lg p-8">
      <h1 class="text-4xl font-bold text-blue-800 mb-4">{{ post.title }}</h1>
      <p class="text-gray-500 mb-6">{{ formattedDate }}</p>
      <img :src="post.image" :alt="post.title" class="w-full rounded-lg mb-8 object-cover max-h-96" />
      <div class="prose prose-blue max-w-none" v-html="post.content"></div>
    </article>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const postId = route.params.id as string

// Simulējam datu avotu
const posts = [
  {
    id: '1',
    title: 'Kā sagatavoties pārgājienam',
    date: '2025-03-10',
    image: 'https://picsum.photos/seed/hiking/800/400',
    content: `
      <p>Padomi ekipējuma izvēlē, pārtikas plānošanā un drošības pasākumos.</p>
      <p>Ir svarīgi izvēlēties pareizu apavu, neaizmirst ūdens rezerves un pielāgoties laika apstākļiem.</p>
      <h2>Inventārs</h2>
      <ul>
        <li>Ērti pārgājiena apavi</li>
        <li>Ūdens pudeles</li>
        <li>Ārkārtas gadījumu komplekts</li>
      </ul>
      <p>Vairāk lasi mūsu blogā!</p>
    `,
  },
  {
    id: '2',
    title: 'Labākās takas Portugālē',
    date: '2025-02-25',
    image: 'https://picsum.photos/seed/portugaltrail/800/400',
    content: `
      <p>Iepazīsti skaistākās dabas takas un jūras piekraste no Alentežo līdz Algarve.</p>
      <h2>Maršruts</h2>
      <p>Gar Rota Vicentina ir daudz skaistu skatu un draudzīgas ciematu atmosfēras.</p>
    `,
  },
  {
    id: '3',
    title: 'Ko ņemt līdzi kalnos vasarā',
    date: '2025-01-15',
    image: 'https://picsum.photos/seed/summermountains/800/400',
    content: `
      <p>Praktiski ieteikumi inventāram un apģērbam, lai pārgājiens būtu ērts un drošs.</p>
      <h2>Apģērbs</h2>
      <ul>
        <li>Viegls, elpojošs apģērbs</li>
        <li>Saules aizsargkrēms</li>
        <li>Ūdensnecaurlaidīga jaka</li>
      </ul>
    `,
  },
]

const post = ref(posts.find((p) => p.id === postId) ?? posts[0])

const formattedDate = new Date(post.value.date).toLocaleDateString('lv-LV', {
  year: 'numeric',
  month: 'long',
  day: 'numeric',
})
</script>
