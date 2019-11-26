class Listener {
  constructor (theme, fn) {
    this.theme = theme
    this.fn = fn
    this.open_status = true
    this.handle = this.handle.bind(this)
  }
  handle (e) {
    // 如果改变的storage的key不是CrossPageMsg就忽略
    if (e.key !== 'CrossPageMsg') return
    let info = JSON.parse(e.newValue)
    if (info.theme === this.theme && this.open_status) {
      this.fn(...info.args)
    }
  }
  change (fn) {
    this.fn = fn
  }
  open () {
    this.open_status = true
  }
  close () {
    this.open_status = false
  }
  off () {
    window.removeEventListener('storage', this.handle)
  }
}

export default {
  // 订阅函数
  '$on': (theme, fn) => {
    const listener = new Listener(theme, fn)
    window.addEventListener('storage', listener.handle)
    return listener
  },
  // 发布函数
  '$emit': (theme, ...args) => {
    if (typeof theme !== 'string') return
    localStorage.setItem('CrossPageMsg', JSON.stringify({
      theme,
      args,
      random: Math.random() * 10
    }))
  },
  // 关闭订阅
  '$off': (listener) => {
    if (listener instanceof Listener) {
      listener.off()
    }
  }
}
