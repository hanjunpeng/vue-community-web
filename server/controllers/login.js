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
  User.find({ u_name: u_name }, (err, doc) => {
    console.log(doc)
    if (doc.length === 0) {
      res.send({ code: 1, msg: '该用户不存在' })
    } else if (doc[0].u_password === u_password) {
      res.send({ code: 0, msg: '登录成功'})
    } else if (doc[0].u_password !== u_password) {
      res.send({code: 1, msg: '密码不正确，请重新输入'})
    }
  })
}