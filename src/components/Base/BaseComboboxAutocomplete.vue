<script setup lang="ts">
import { computed, type PropType } from 'vue'
import {
  Combobox,
  ComboboxInput,
  ComboboxButton,
  ComboboxOptions,
  ComboboxOption,
  TransitionRoot,
  ComboboxLabel,
} from '@headlessui/vue'

interface Option {
  id: number | string;
  name: string;
  country: string;
  state: string;
}

const props = defineProps({
  modelValue: {
    type: Object as PropType<Option | null>,
    required: false,
    default: () => {},
  },
  label: {
    type: String,
    required: false,
  },
  options: {
    type: Array as PropType<Option[]>,
    required: true,
  },
  actionInProgress: {
    type: [Boolean],
    required: false,
    default: false,
  },
  placeholder: {
    type: String,
    required: false,
    default: "none",
  },
  query: {
    type: String,
    required: true,
  }
});

const emit = defineEmits(["update:modelValue", "updateQuery"]);

const valueTmp = computed({
  get() {
    return props.modelValue;
  },
  set(evt) {
    emit("update:modelValue", evt);
  },
});

const queryTmp = computed({
  get() {
    return props.query;
  },
  set(evt) {
    emit("updateQuery", evt);
  },
});


const displayValue = ()=>{
  if(!props.modelValue) return ""

  return Object.keys(props.modelValue).length
    ?     props.modelValue.name + ', ' + props.modelValue.country + ', ' + props.modelValue.state
    :      ""
}

</script>

<template>
    <Combobox
      as="div"
      v-slot="{ open }"
      v-model="valueTmp"
    >

      <ComboboxLabel
        class="font-medium mb-1 text-gray-700"
      >
        {{ label }}
      </ComboboxLabel>

      <div class="relative mt-1">
        <div
          class="relative w-full cursor-default overflow-hidden rounded-lg bg-white text-left shadow-md sm:text-sm"
        >
          <ComboboxInput
            class="w-full border-none py-2 pl-3 pr-10 text-sm leading-5 text-gray-900 focus:outline-none"
            :placeholder="placeholder"
            :displayValue="displayValue"
            @change="queryTmp = $event.target.value"
          />

          <ComboboxButton
            class="absolute cursor-pointer inset-y-0 right-0 flex items-center pr-2"
          >
            <font-awesome-icon
              :icon="open ? 'fa-solid fa-chevron-up' : 'fa-solid fa-chevron-down'"
              class="h-5 w-5 text-gray-400"
            />
          </ComboboxButton>
        </div>

        <TransitionRoot
          leave="transition ease-in duration-100"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
          @after-leave="queryTmp = ''"
        >
          <ComboboxOptions
            class="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white p-1 text-base shadow-lg focus:outline-none sm:text-sm"
          >
            <div
              v-if="options.length === 0"
              class="relative cursor-default select-none px-4 py-2 text-gray-700"
            >
              {{ queryTmp !== '' ? "Nothing found." : "Type to search." }}
            </div>



            <ComboboxOption
              v-for="option in options"
              as="template"
              :key="option.id"
              :value="option"
              v-slot="{ selected, active }"
            >
              <li
                class="relative cursor-default select-none p-2 rounded"
                :class="{
                  'bg-teal-600 text-white': active,
                  'text-gray-900': !active,
                }"
              >
                <span
                  class="block truncate"
                  :class="{ 'font-medium': selected, 'font-normal': !selected }"
                >
                  {{ option.name }}, {{option.country}}, {{option.state}}
                </span>
              </li>
            </ComboboxOption>
          </ComboboxOptions>
        </TransitionRoot>
      </div>
    </Combobox>
</template>


