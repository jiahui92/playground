import "https://www.googletagmanager.com/gtag/js?id=G-changeme!!!!!!!!!!!!!!!!!!!!!!!"

initGA4()
function initGA4() {
  const win = window as any;
  win.dataLayer = win.dataLayer || [];
  function gtag(){win.dataLayer.push(arguments);}
  window.gtag = gtag;
  window.gtag('js', new Date());
  window.gtag('config', 'G-changeme!!!!!!!!!!!!!!!!!!!!!!!');
}

/**
 * 发送事件到 GA4
 * @param {string} eventName - 事件名称，如 'page_view' 或 'button_click'
 * @param {object} eventParams - 事件参数对象
 */
export function sendGA4Event(eventName: Gtag.EventNames | (string & {}), eventParams?: Gtag.ControlParams | Gtag.EventParams | Gtag.CustomParams) {
  window.gtag('event', eventName, eventParams)
}

export function sendGA4BtnEvent(buttonName: string, eventParams: Gtag.CustomParams = {}) {
  sendGA4Event('button_click', { button_name: buttonName, ...(eventParams || {}) })
}
