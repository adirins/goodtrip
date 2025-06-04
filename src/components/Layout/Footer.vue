<template>
  <footer class="bg-blue-900 text-white mt-16">
    <div class="max-w-7xl mx-auto px-6 py-12 grid gap-8 md:grid-cols-3">
      <!-- Logo un īss apraksts -->
      <div>
        <h2 class="text-2xl font-bold">GoodTrip.lv</h2>
        <p class="text-sm mt-3 text-blue-200">
          Neformāli pārgājieni Eiropā – kopā ar domubiedriem, dabā, ar skaidru plānu un piedzīvojumu sajūtu.
        </p>
      </div>

      <!-- Ātrās saites -->
      <div>
        <h3 class="text-lg font-semibold mb-3">Saites</h3>
        <ul class="space-y-2 text-blue-200">
          <li><RouterLink to="/" class="hover:underline">Sākums</RouterLink></li>
          <li><RouterLink to="/par-mums" class="hover:underline">Par mums</RouterLink></li>
          <li><RouterLink to="/celjojumi" class="hover:underline">Ceļojumi</RouterLink></li>
          <li><RouterLink to="/blogs" class="hover:underline">Blogs un padomi</RouterLink></li>
          <li><RouterLink to="/kontakti" class="hover:underline">Kontakti</RouterLink></li>
        </ul>
      </div>

      <!-- Kontakti un sociālie -->
      <div>
        <h3 class="text-lg font-semibold mb-3">Kontakti</h3>
        <ul class="space-y-2 text-blue-200 text-sm">
          <li>Email: <a href="mailto:info@goodtrip.lv" class="hover:underline">info@goodtrip.lv</a></li>
          <li>Instagram: <a href="https://instagram.com/goodtrip.lv" target="_blank" class="hover:underline">@goodtrip.lv</a></li>
          <li>WhatsApp: <a href="https://wa.me/37112345678" target="_blank" class="hover:underline">Sarakste</a></li>
        </ul>
      </div>
    </div>

    <!-- Apakšējā josla -->
    <div class="border-t border-blue-700 text-center py-4 text-xs text-blue-300">
      &copy; {{ new Date().getFullYear() }} GoodTrip.lv – Visas tiesības aizsargātas.
      <RouterLink to="/privatuma-politika" class="ml-2 underline hover:text-white">Privātuma politika</RouterLink>
    </div>
  </footer>
</template>

<script setup lang="ts">
</script>

