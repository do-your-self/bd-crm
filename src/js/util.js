export default {
  // fmoney (s, n) {
  //   n = n > 0 && n <= 20 ? n : 2
  //   s = parseFloat((s + '').replace(/[^\d\.-]/g, '')).toFixed(n) + ''
  //   var l = s.split('.')[0].split('').reverse(), r = s.split('.')[1]
  //   t = ''
  //   for (i = 0; i < l.length; i++) {
  //     t += l[i] + ((i + 1) % 3 === 0 && (i + 1) != l.length ? ',' : '')
  //   }
  //   return t.split('').reverse().join('') + '.' + r
  // },
  // formatMoney (s, type) {
  //   if (/[^0-9\.]/.test(s)) {
  //     return '0'
  //   }
  //   if (s == null || s === '') {
  //     return '0'
  //   }
  //   s = s.toString().replace(/^(\d*)$/, '$1.')
  //   s = (s + '00').replace(/(\d*\.\d\d)\d*/, '$1')
  //   s = s.replace('.', ',')
  //   var re = /(\d)(\d{3},)/
  //   while (re.test(s)) {
  //     s = s.replace(re, '$1,$2')
  //     s = s.replace(/,(\d\d)$/, '.$1')
  //   }
  //   if (type === 0) { // 不带小数位(默认是有小数位)
  //     var a = s.split('.')
  //     if (a[1] === '00') {
  //       s = a[0]
  //     }
  //   }
  //   return s
  // }
}
