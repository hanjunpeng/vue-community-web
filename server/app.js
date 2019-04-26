/**
 * 页面配置
 */
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const mongoose = require('mongoose');
const database = require('./database.js');
const router = require('./router')

//链接数据库
const databaseUrl = `mongodb://${database.hostname}/${database.database}`
mongoose.connect(databaseUrl)
mongoose.connection.on('connected', () => {
  console.log(`${databaseUrl} Mongodb connected success`)
})
mongoose.connection.on('error', () => {
  console.log('Mongodb connected fail')
})
mongoose.connection.on('disconnected', () => {
  console.log('Mongodb connected disconnected')
})

// 中间件 解析请求体
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))
app.use(router)

app.listen(3000, () => {
  console.log('server is running on http://localhost:3000')
})
