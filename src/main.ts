import './assets/main.css'
import { createApp, type App } from 'vue'
import { createPinia } from 'pinia'
import BaseSelect from '@/components/Base/BaseSelect.vue'
import BaseModalDialog from "@/components/Base/BaseModalDialog.vue";
import BaseComboboxAutocomplete from '@/components/Base/BaseComboboxAutocomplete.vue'
import AppRoot  from './App.vue'
import router from './router'
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";

library.add(fas, far);

export const app :App<Element> = createApp(AppRoot)

app.use(createPinia())
app.use(router)

app.component('font-awesome-icon', FontAwesomeIcon)
app.component("BaseSelect", BaseSelect)
app.component("BaseModalDialog", BaseModalDialog)
app.component("BaseComboboxAutocomplete", BaseComboboxAutocomplete)

app.mount('#app')
