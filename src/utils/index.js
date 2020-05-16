/**
 * wait时间内不能点两次
 *
 * @author 金桔
 * @export
 * @param {*} fn
 * @param {number} [wait=500]
 * @param {boolean} [isImmediate=true]
 * @returns
 */
export function debounce(fn, wait = 500, isImmediate = true) {
  let timerId = null
  let flag = true
  if (isImmediate) {
    return function() {
      clearTimeout(timerId)
      if (flag) {
        fn.apply(this, arguments)
        flag = false
      }
      timerId = setTimeout(() => {
        flag = true
      }, wait)
    }
  }
  return function() {
    clearTimeout(timerId)
    timerId = setTimeout(() => {
      fn.apply(this, arguments)
    }, wait)
  }
}
