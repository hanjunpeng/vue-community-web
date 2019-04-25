/**
 * @Desc login接口 会生成一个token让前台 做接口检验
 */
const User = require('../models/user')
module.exports = function (req, res) {
  let { u_name, u_password } = req.body;
  let newUser = new User({
    u_name: u_name || '',
    u_password: u_password || ''
  })
  console.log(u_name, u_password)
  res.json({
    code: 1
  })
}