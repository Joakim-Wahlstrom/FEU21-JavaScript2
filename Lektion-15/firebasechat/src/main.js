import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import './assets/css/default.css'

import { auth } from './firebase/config'
import { onAuthStateChanged } from 'firebase/auth'

// createApp(App).use(router).mount('#app')

let app

onAuthStateChanged(auth, () => {
  if(!app) {
    app = createApp(App).use(router).mount('#app')
  }
})