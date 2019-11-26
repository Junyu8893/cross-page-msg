import _Cross from './lib'

export const Cross = _Cross

export default {
  install: Vue => {
    Vue.prototype.$Cross = _Cross
  }
}
