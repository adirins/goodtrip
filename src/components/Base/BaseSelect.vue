<script setup lang="ts">
import {computed} from 'vue'
import {
  Listbox,
  ListboxButton, ListboxLabel,
  ListboxOption,
  ListboxOptions,
} from '@headlessui/vue'

const props = defineProps({
  modelValue: {
    type: String,
    required: false,
    default: "",
  },
  options:{
    type: Array,
    required:true
  },
  label: {
    type: String,
    required: false,
  },
});

const emit = defineEmits(["update:modelValue"]);

const valueTmp = computed({
  get() {
    return props.modelValue;
  },
  set(evt) {
    emit("update:modelValue", evt);
  },
});
</script>

<template>
  <Listbox
    as="div"
    v-slot="{ open }"
    v-model="valueTmp"
  >
    <ListboxLabel
      class="font-medium mb-1 text-gray-700"
    >
      {{ label }}
    </ListboxLabel>

    <div class="relative mt-1 min-w-40 ">
      <ListboxButton
        class="relative w-full cursor-default rounded-lg bg-white py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white/75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm"
      >
        <span class="block truncate capitalize">{{ valueTmp }}</span>
        <span
          class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2"
        >
            <font-awesome-icon
              :icon="open ? 'fa-solid fa-chevron-up' : 'fa-solid fa-chevron-down'"
              class="h-5 w-5 text-gray-400"
            />
          </span>
      </ListboxButton>

      <transition
        leave-active-class="transition duration-100 ease-in"
        leave-from-class="opacity-100"
        leave-to-class="opacity-0"
      >
        <ListboxOptions
          class="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white p-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm"
        >
          <ListboxOption
            v-slot="{ active, selected }"
            v-for="option in options"
            :key="option"
            :value="option"
            as="template"
          >
            <li
              :class="[
                  active ? 'bg-teal-600 text-white' : 'text-gray-900',
                  'relative cursor-default select-none p-2 rounded',
                ]"
            >
              <span
                :class="[
                  selected ? 'font-600' : 'font-normal',
                  'block truncate capitalize',
                ]"
              >
                {{ option }}
              </span>
            </li>
          </ListboxOption>
        </ListboxOptions>
      </transition>
    </div>
  </Listbox>
</template>


