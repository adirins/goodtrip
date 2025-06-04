<template>
  <section class="max-w-7xl mx-auto px-6 py-16">
    <h1 class="text-4xl font-bold text-blue-800 mb-8 text-center">Blogs un padomi</h1>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
      <article
        v-for="post in blogPosts"
        :key="post.id"
        class="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition"
      >
        <img :src="post.image" :alt="post.title" class="w-full h-48 object-cover" />
        <div class="p-4">
          <h2 class="text-xl font-semibold text-blue-700">{{ post.title }}</h2>
          <p class="text-sm text-gray-600 mt-1">{{ post.date }}</p>
          <p class="text-gray-700 mt-3">{{ post.excerpt }}</p>
          <RouterLink
            :to="`/blogs/${post.id}`"
            class="inline-block mt-4 text-orange-500 hover:underline font-medium"
          >
            Lasīt vairāk
          </RouterLink>
        </div>
      </article>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const blogPosts = ref([
  {
    id: '1',
    title: 'Kā sagatavoties pārgājienam',
    date: '2025-03-10',
    excerpt: 'Padomi ekipējuma izvēlē, pārtikas plānošanā un drošības pasākumos...',
    image: 'https://picsum.photos/seed/hiking/600/400',
  },
  {
    id: '2',
    title: 'Labākās takas Portugālē',
    date: '2025-02-25',
    excerpt: 'Iepazīsti skaistākās dabas takas un jūras piekraste no Alentežo līdz Algarve...',
    image: 'https://picsum.photos/seed/portugaltrail/600/400',
  },
  {
    id: '3',
    title: 'Ko ņemt līdzi kalnos vasarā',
    date: '2025-01-15',
    excerpt: 'Praktiski ieteikumi inventāram un apģērbam, lai pārgājiens būtu ērts un drošs...',
    image: 'https://picsum.photos/seed/summermountains/600/400',
  },
])
</script>
