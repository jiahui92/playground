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
  let timeStamp = +new Date();

  return (...args) => {

    const now = +new Date();
    if (now - timeStamp > delay) {
      timeStamp = now;
      fn(...args);
    }

  }
}

const fn = (a) => {
  console.log(a);
}
window.onscroll = debounce(fn.bind(this, 'debounce'), 1000)
// window.onscroll = throttle(fn.bind(this, 'throttle'), 1000)
