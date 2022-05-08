import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

/****************************************************************************/
// insatlled bootstrap and add dependency files
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'
/****************************************************************************/
createApp(App).use(router).mount('#app')
