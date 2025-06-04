<template>
  <section class="max-w-md mx-auto mt-20 p-6 bg-white rounded-xl shadow-md">
    <h1 class="text-3xl font-bold text-blue-800 mb-8 text-center">Pieteikšanās</h1>

    <form @submit.prevent="handleSubmit" novalidate>
      <div class="mb-6">
        <label for="email" class="block mb-2 font-medium text-gray-700">E-pasts</label>
        <input
          id="email"
          type="email"
          v-model="email"
          required
          placeholder="ievadi e-pastu"
          class="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <p v-if="errors.email" class="text-red-600 mt-1 text-sm">{{ errors.email }}</p>
      </div>

      <div class="mb-6">
        <label for="password" class="block mb-2 font-medium text-gray-700">Parole</label>
        <input
          id="password"
          type="password"
          v-model="password"
          required
          placeholder="ievadi paroli"
          class="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <p v-if="errors.password" class="text-red-600 mt-1 text-sm">{{ errors.password }}</p>
      </div>

      <button
        type="submit"
        class="w-full bg-orange-500 text-white py-3 rounded hover:bg-orange-600 transition"
        :disabled="isSubmitting"
      >
        {{ isSubmitting ? 'Ienākšana...' : 'Ienākt' }}
      </button>
    </form>
  </section>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'

const email = ref('')
const password = ref('')
const isSubmitting = ref(false)
const errors = reactive<{ email?: string; password?: string }>({})

function validate() {
  errors.email = ''
  errors.password = ''

  let valid = true

  if (!email.value) {
    errors.email = 'E-pasts ir obligāts'
    valid = false
  } else if (!/\S+@\S+\.\S+/.test(email.value)) {
    errors.email = 'Nepareizs e-pasta formāts'
    valid = false
  }

  if (!password.value) {
    errors.password = 'Parole ir obligāta'
    valid = false
  } else if (password.value.length < 6) {
    errors.password = 'Parolei jābūt vismaz 6 rakstzīmēm'
    valid = false
  }

  return valid
}

async function handleSubmit() {
  if (!validate()) return

  isSubmitting.value = true

  try {
    // Šeit ievieto API pieprasījumu, piem., fetch vai axios
    // await api.login({ email: email.value, password: password.value })
    // Pagaidām simulējam aizkavi:
    await new Promise((r) => setTimeout(r, 1000))

    alert('Pieteikšanās veiksmīga!')
    // Pēc veiksmīgas pieteikšanās var novirzīt uz citu lapu:
    // router.push('/dashboard')
  } catch (error) {
    alert('Kļūda pieteikšanās laikā')
  } finally {
    isSubmitting.value = false
  }
}
</script>
