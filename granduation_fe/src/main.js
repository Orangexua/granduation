import { createApp, Vue } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
// import axios from './axios/index'

const app = createApp(App);
app.config.globalProperties.$axios = axios;
app.use(router).use(store);
app.mount('#app')
