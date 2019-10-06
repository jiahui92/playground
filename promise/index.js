import('./promise.js').then(({MyPromise}) => {

  /** test1 *******************************************************/
  MyPromise.resolve().then(() => {
    console.log('MyPromise.resolve')
  })

  /** test2 *******************************************************/
  const p = () => {
    return new MyPromise((resolve, reject) => {
      setTimeout(() => {
        resolve('resolve text --> thenFn1')
        // reject('my reject error')
      }, 1000)
    })
  }

  p().then((text) => {
    console.log(text)
    return 'test thenFn return value'
  }).then(text => {
    console.log(text)
    a // error, go to catch
  }).then(() => {
    console.error('wont execute here')
  }).catch(e => {
    console.error(e)
    return new Error('My Error')
  }).catch(e => {
    console.error(e)
  }).finally(() => {
    console.log('finally')
  })

  /** test3 *******************************************************/
  // new Promise((resolve) => {
  //   setTimeout(resolve, 100)
  // }).then((resolve) => {
  //   setTimeout(() => {
  //     console.log('thenFn')
  //     resolve()
  //   }, 100)
  // })
})


