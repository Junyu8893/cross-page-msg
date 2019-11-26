import Broadcast from './lib'
export default {
  install: Vue => {
    Vue.prototype.$Broadcast = Broadcast
  }
}
