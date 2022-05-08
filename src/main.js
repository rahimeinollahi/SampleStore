import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

/****************************************************************************/
// insatlled bootstrap and add dependency files
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'
/****************************************************************************/


/****************************************************************************/
//add scss folder to improve and optimize css file
import './scss/index.scss'
/****************************************************************************/
createApp(App).use(router).mount('#app')
