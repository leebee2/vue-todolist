import Vue from 'vue'
import App from './App.vue'
import { store } from './store/store'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* 
   원하는 아이콘을 개별적으로 import
*/
import { faUserSecret, faPlus, faTrash, faCheck, faTimes, faX } from '@fortawesome/free-solid-svg-icons'

/* import font awesome 컴포넌트 */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* 위에서 import한 아이콘들을 Core library에 등록 */
library.add(faUserSecret, faPlus, faTrash, faCheck, faTimes, faX)

/* font awesome 컴포넌트를 전역으로 등록 */
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

new Vue({
  el: '#app',
  store,
  render: h => h(App)
})
