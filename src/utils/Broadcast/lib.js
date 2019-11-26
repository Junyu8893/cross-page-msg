class Listener {
  constructor (theme, fn) {
    this.theme = theme
    this.open_status = true
    this.bc = new BroadcastChannel(theme)
    this.change(fn)
  }
  change (fn) {
    this.bc.onmessage = e => {
      if (this.open_status) {
        fn(...e.data.args)
      }
    }
  }
  open () {
    this.open_status = true
  }
  close () {
    this.open_status = false
  }
  off () {
    this.bc.close()
  }
}
export default {
  // 订阅者
  '$on': (theme, fn) => {
    return new Listener(theme, fn)
  },
  // 发布者
  '$emit': (theme, ...args) => {
    const bc = new BroadcastChannel(theme)
    bc.postMessage({ theme, args })
    bc.close()
  },
  // 关闭订阅
  '$off': (listener) => {
    if (listener instanceof Listener) {
      listener.close()
    }
  }
}
