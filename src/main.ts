import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import BaseSelect from '@/components/base/BaseSelect.vue'

import App from './App.vue'
import router from './router'

import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";

library.add(fas, far);

export const app :App<element> = createApp(App)

app.use(createPinia())
app.use(router)

app.component('font-awesome-icon', FontAwesomeIcon)
app.component("BaseSelect", BaseSelect)

app.mount('#app')
