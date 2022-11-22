import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import './assets/tailwind.css'

// Vuesax Component Framework
// import Vuesax from 'vuesax'
// import 'material-icons/iconfont/material-icons.css' //Material Icons
// import 'vuesax/dist/vuesax.css' // Vuesax
// Vue.use(Vuesax)

createApp(App).use(router).mount('#app')
