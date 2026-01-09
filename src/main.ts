import '@/assets/styles/tailwind.css'
import '@/assets/styles/index.scss'
import 'primeicons/primeicons.css'

import {createApp} from 'vue'
import {createPinia} from 'pinia'
import {setupAdditionalPlugins} from "@/providers";
import {vScrollReveal} from '@/directives/scrollReveal'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.directive('scroll-reveal', vScrollReveal)

setupAdditionalPlugins(app);

app.mount('#app')
