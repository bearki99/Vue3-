import { createApp } from 'vue'

import App from './App.vue'
import router from './router'

import './assets/css/common.less'
import './assets/css/reset.less'
import "normalize.css"
import pinia from './stores'
import registerIcons from './global/register-icons'

const app = createApp(App)


app.use(pinia)
app.use(router)
app.use(registerIcons)

app.mount('#app')
