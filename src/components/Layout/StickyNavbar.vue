<script setup lang="ts">
import { ref } from 'vue'
import { Menu as MenuIcon } from 'lucide-vue-next' // Vai 'lucide-vue' atkarībā no versijas

const menuOpen = ref(false)
const toggleMenu = () => {
  menuOpen.value = !menuOpen.value
}
</script>

<template>
  <header class="sticky top-0 z-50 bg-white shadow-md">
    <nav class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between h-16 items-center">
        <!-- Logo -->
        <RouterLink to="/" class="text-xl font-semibold text-blue-600 hover:text-blue-800">
          <img src="@/assets/g_icon.png" alt="icon" class="w-8 h-8" />
        </RouterLink>

        <!-- Navigācijas izvēlne -->
        <div class="hidden md:flex gap-6 text-gray-700">
          <RouterLink to="/par-mums" class="hover:text-green-500 transition">Par mums</RouterLink>
          <RouterLink to="/celojumi" class="hover:text-green-500 transition">Ceļojumi</RouterLink>
          <RouterLink to="/blogs" class="hover:text-green-500 transition">Blogs</RouterLink>
          <RouterLink to="/kontakti" class="hover:text-green-500 transition">Kontakti</RouterLink>
        </div>

        <!-- CTA poga -->
        <RouterLink
          to="/pieteiksanas"
          class="ml-4 px-4 py-2 rounded-xl bg-green-500 text-white hover:bg-green-600 transition hidden md:block"
        >
          Pieteikties
        </RouterLink>

        <!-- Mobilā izvēlne -->
        <button @click="toggleMenu" class="md:hidden text-gray-700 focus:outline-none">
          <MenuIcon class="w-6 h-6" />
        </button>
      </div>
    </nav>

    <!-- Mobilā izvēlne dropdown -->
    <div v-if="menuOpen" class="md:hidden bg-white px-4 pb-4 space-y-2 border-t">
      <RouterLink @click="menuOpen=!menuOpen" to="/par-mums" class="block text-gray-700 hover:text-green-500">Par mums</RouterLink>
      <RouterLink @click="menuOpen=!menuOpen" to="/celojumi" class="block text-gray-700 hover:text-green-500">Ceļojumi</RouterLink>
      <RouterLink @click="menuOpen=!menuOpen" to="/blogs" class="block text-gray-700 hover:text-green-500">Blogs</RouterLink>
      <RouterLink @click="menuOpen=!menuOpen" to="/kontakti" class="block text-gray-700 hover:text-green-500">Kontakti</RouterLink>
      <RouterLink @click="menuOpen=!menuOpen"
        to="/pieteiksanas"
        class="block text-center mt-2 px-4 py-2 rounded-xl bg-green-500 text-white hover:bg-green-600"
      >
        Pieteikties
      </RouterLink>
    </div>
  </header>
</template>
