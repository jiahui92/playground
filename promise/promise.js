/**
 * Promise(fn) --> fn(resolve) --> resolve() --> then.resolveFn
 * 
 * 缺陷1: 内部使用了setTimeout，实际上把Promise从micro task 变成了 task
 *  * 使用MutationObserver|postMessage代替setTimeout（实际中使用immediate库即可）
 * 缺陷2: 不符合Promises/A+规范 https://promisesaplus.com/
 *  * then没有返回一个新的promise
 *  * then不支持返回一个promise (实现需要将parentPromise.thenArr push到 childPromise.thenArr里)
 *  * then不支持传入reject (不能够单独处理同级的resolve.Error)
 */

export function MyPromise (fn) {
  this.thenArr = []
  this.catchArr = []
  this.finallyFn = () => {}
  try {
    fn && fn(this.resolve.bind(this), this.reject.bind(this))
  } catch (e) {
    this.reject(e)
  }
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
  /**
   * var a = 1;
   * promise1.then(() => a = 2);
   * console.log(a);
   * 
   * // 若不加setTimeout，那么a可能是1或者2
   * // 取决于promise1执行resolve方法是同步还是异步的
   * // 因为套了一层setTimeout，那么就得写多一层try,catch了
   */
  setTimeout(() => {
    try {
      const fnArr = this[`${type}Arr`]
      if (fnArr.length) {
        const fn = fnArr.shift()
        // 触发下一个fn
        this.next(type, fn(data))
      } else {
        this.finallyFn(data)
      }
    } catch (e) {
      this.reject(e)
    }
  })
}

MyPromise.resolve = function () {
  return new MyPromise((resolve) => {
    resolve()
  })
}
