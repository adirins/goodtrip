<template>
  <section class="max-w-3xl mx-auto px-6 py-16">
    <button @click="$router.back()" class="mb-6 text-blue-600 hover:underline">&larr; Atpakaļ uz blogu</button>

    <article class="bg-white rounded-2xl shadow-lg p-8">
      <h1 class="text-4xl font-bold text-blue-800 mb-4">{{ post?.title }}</h1>
<!--      <p class="text-gray-500 mb-6">{{ formattedDate }}</p>-->
      <img :src="post?.image" :alt="post?.title" class="w-full rounded-lg mb-8 object-cover max-h-96" />
      <div class="prose prose-blue max-w-none" v-html="post?.content"></div>
    </article>
  </section>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'
import {useBlogStore} from "@/stores/blogs.js";

const route = useRoute()
const postId = route.params.id as string

const blogStore = useBlogStore()
const post = blogStore.getById(postId)

// const formattedDate = new Date(post.date).toLocaleDateString('lv-LV', {
//   year: 'numeric',
//   month: 'long',
//   day: 'numeric',
// })
</script>
