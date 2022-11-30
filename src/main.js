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
const app = createApp(App)
app.use(router)
app.use(store)
app.mount('#app')
/*
createApp(App).component("font-awesome-icon",FontAwesomeIcon).use(
        router,
        store,
).mount('#app')
*/
