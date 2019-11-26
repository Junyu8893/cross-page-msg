import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Cross from '@/utils/CrossPageMsg'
import Broadcast from '@/utils/Broadcast'

// localStorage实现
Vue.use(Cross)
// BroadcastChannel实现
Vue.use(Broadcast)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
