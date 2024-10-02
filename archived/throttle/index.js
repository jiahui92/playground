// 1s内多次重复触发，也只会执行一次
function debounce (fn ,delay) {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn(...args)
    }, delay);
  }
}

/**
 * 节流: 连续滚动，n秒内会执行一次
 */
function throttle (fn ,delay) {
  let timer;
  let timeStamp;

  return (...args) => {
    const now = +new Date();
    if (!timeStamp) timeStamp = now;

    if (now - timeStamp > delay) {
      timeStamp = now;
      fn(...args);
    } else {
      clearTimeout(timer);
      timer = setTimeout(() => {
        fn(...args);
        timeStamp = 0; // 防止很久没滚动，突然滚动了，就直接执行了，配合‘if (!timeStamp) timeStamp = now’
      }, delay);
    }
  }
}

/**
 * 节流2：一个更简单的实现版本
 */
function throttle2 (fn ,delay) {
  let canRun = true;

  return () => {
    if (!canRun) return;
    canRun = false;

    setTimeout(() => {
      fn(arguments);
      canRun = true;
    }, delay);
  }
}


const fn = (a) => {
  console.log(a);
}
// window.onscroll = debounce(fn.bind(this, 'debounce'), 1000)
// window.onscroll = throttle(fn.bind(this, 'throttle'), 1000)
window.onscroll = throttle2(fn.bind(this, 'throttle2'), 1000)
