const Mock = require('mockjs')
const Random = Mock.Random
// let url = 'http://10.0.5.1:5001'
var data = Mock.mock({
  'list|1-3': [{// 属性 list 的值是一个数组，其中含有 1 到 10 个元素
    'id|+1': 1, // 属性 id 是一个自增数，起始值为 1，每次增 1
    'name|1': '吴晓明',
    'city': {
      'number|1': '03443',
      'cityname|1': '北京'
    }
  }]
})
const api = 'http://10.0.5.1:5001'
let i = 0
Mock.mock(`${api}/login`, 'post', ({body}) => {
  let data = JSON.parse(body)
  if (/^[1][3,4,5,7,8][0-9]{9}$/.test(data.phone)) {
    if (data.password === 'abcd1234') {
      return {
        msg: '登录成功',
        reset: true
      }
    } else if (data.password === '1234abcd') {
      if (data.phone === '18514428716') {
        return {
          success: true,
          msg: '登录成功',
          reset: false,
          admin: true
        }
      } else {
        return {
          success: false,
          msg: '登录成功',
          reset: false,
          admin: false
        }
      }
    } else {
      i++
      if (i >= 3 && i < 5) {
        return {
          msg: '请检查用户名和密码',
          code: true,
          err: i
        }
      } else {
        return {
          msg: '请检查用户名和密码',
          code: false
        }
      }
    }
  } else {
    i++
    if (i >= 3 && i < 5) {
      return {
        msg: '请检查用户名和密码',
        code: true,
        err: i
      }
    } else {
      return {
        msg: '请检查用户名和密码',
        code: false
      }
    }
  }
})
Mock.mock(`${api}/getCaptcha`, ({body}) => {
  console.log(data)
  return {
    url: Random.dataImage('100x30', 'mock的图片') // Random.dataImage( size, text ) 生成一段随机的 Base64 图片编码
  }
})
Mock.mock(`${api}/code`, ({body}) => {
  console.log(data)
})

// module.export = {
//   [`POST ${api}/login`] (req, res) {
//     res.clearCookie('token')
//     res.status(200).end()
//   }
// }
