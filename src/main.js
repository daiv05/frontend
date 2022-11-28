import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import './assets/tailwind.css'
import FontAwesomeIcon from "@/plugin/fontawesome"
// Vuesax Component Framework
// import Vuesax from 'vuesax'
// import 'material-icons/iconfont/material-icons.css' //Material Icons
// import 'vuesax/dist/vuesax.css' // Vuesax
// Vue.use(Vuesax)

createApp(App).component("font-awesome-icon",FontAwesomeIcon).use(router).mount('#app')
