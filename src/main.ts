import '@/assets/normalize.css'
import 'vue3-toastify/dist/index.css'
import '@mdi/font/css/materialdesignicons.css'

import { createApp } from 'vue'
// import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

// Vuetify
import { createVuetify } from 'vuetify'
import 'vuetify/styles'

const vuetify = createVuetify()

const app = createApp(App)

// app.use(createPinia())
app.use(router)
app.use(vuetify)

app.mount('#app')
