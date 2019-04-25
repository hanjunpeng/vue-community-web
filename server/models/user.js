const mongoose = require('mongoose')
const Schema = mongoose.Schema
const loginSchema = new Schema({
  u_name: 'String',
  u_password: 'String'
})
module.exports = mongoose.model('user', loginSchema, 'user')
