import { createApp } from 'vue'

import App from './App.vue'
import router from './router'

import './assets/main.css'
import "normalize.css"
import pinia from './stores'

// import ElementUI from 'element-ui';
const app = createApp(App)

app.use(pinia)
app.use(router)

app.mount('#app')
