import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import './assets/tailwind.css'
import FontAwesomeIcon from "@/plugin/fontawesome"
import { store } from './store'
// Vuesax Component Framework
// import Vuesax from 'vuesax'
// import 'material-icons/iconfont/material-icons.css' //Material Icons
// import 'vuesax/dist/vuesax.css' // Vuesax
// Vue.use(Vuesax)
store.dispatch('getLogin')
const app = createApp(App)
app.component("font-awesome-icon",FontAwesomeIcon)
app.use(router)
app.use(store)
app.mount('#app')
