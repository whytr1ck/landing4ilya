import './assets/styles/style.css'
import 'primeicons/primeicons.css'

import {createApp} from 'vue'
import {createPinia} from 'pinia'
import {setupAdditionalPlugins} from "@/providers";

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)

setupAdditionalPlugins(app);

app.mount('#app')
