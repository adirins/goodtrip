<script setup lang="ts">
import { RouterView } from 'vue-router'
import StickyNavbar from "@/components/Layout/StickyNavbar.vue";
import Footer from "@/components/Layout/Footer.vue";

</script>

<template>
  <div class="flex flex-col min-h-screen">
    <StickyNavbar />

    <main class="flex-grow">
      <router-view />
    </main>

    <Footer />
    </div>
</template>
