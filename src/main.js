import "bootstrap/dist/css/bootstrap.min.css"
// import "@morioh/v-lightbox/dist/lightbox.css"
import { createApp  } from 'vue'
// import Lightbox from '@morioh/v-lightbox'
import App from './App.vue'
import router from './router'
// global register
createApp(App).use(router).mount('#app')
import "bootstrap/dist/js/bootstrap.js"