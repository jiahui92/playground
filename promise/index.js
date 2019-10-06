import('./promise.js').then(({MyPromise}) => {

  /** test1 *******************************************************/
  MyPromise.resolve().then(() => {
    console.log('MyPromise.resolve')
  })

  /** test2 *******************************************************/
  const p = (text) => {
    return new MyPromise((resolve, reject) => {
      setTimeout(() => {
        resolve()
        // reject('my reject error')
      }, 1000)
    })
  }

  p().then(() => {
    console.log('thenFn1')
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

})


