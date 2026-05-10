export function trackConversion() {
  if (typeof window.gtag !== 'function') return
  window.gtag('event', 'conversion', {
    send_to: 'AW-18153758479',    value: 1.0,
    currency: 'IDR',
  })
}

export function trackCallConversion(url) {
  if (typeof window.gtag !== 'function') {
    if (url) window.location = url
    return false
  }
  const callback = function () {
    if (url) window.location = url
  }
  window.gtag('event', 'conversion', {
    send_to: 'AW-18153758479',    value: 1.0,
    currency: 'IDR',
    event_callback: callback,
  })
  return false
}
