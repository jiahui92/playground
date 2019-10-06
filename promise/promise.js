export function MyPromise (fn) {
  this.thenArr = []
  this.catchArr = []
  this.finallyFn = () => {}
  setTimeout(() => {
    try {
      fn && fn(this.resolve.bind(this), this.reject.bind(this))
    } catch (e) {
      debugger
      this.reject(e)
    }
  })
}

MyPromise.prototype.then = function (fn) {
  this.thenArr.push(fn)
  return this
}

MyPromise.prototype.catch = function (fn) {
  this.catchArr.push(fn)
  return this
}

MyPromise.prototype.finally = function (fn) {
  this.finallyFn = fn
  return this
}

MyPromise.prototype.resolve = function (data) {
  try {
    this.next('then', data)
  } catch (e) {
    this.next('catch', e)
  }
}

MyPromise.prototype.reject = function (e) {
  this.next('catch', e)
}

MyPromise.prototype.next = function (type, data) {
  const fnArr = this[`${type}Arr`]
  if (fnArr.length) {
    const fn = fnArr.shift()
    // 触发下一个fn
    this.next(type, fn(data))
  } else {
    this.finallyFn(data)
  }
}

MyPromise.resolve = function () {
  return new MyPromise((resolve) => {
    resolve()
  })
}

