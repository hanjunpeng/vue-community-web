/**
 * 页面配置
 */
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const mongoose = require('mongoose');
const database = require('./database.js');

//链接数据库
const databaseUrl = `mongodb://${database.hostname}/${database.database}`
mongoose.connect(databaseUrl)
mongoose.connection.on('connected', () => {
  console.log('Mongodb connected success')
})
mongoose.connection.on('error', () => {
  console.log('Mongodb connected fail')
})
mongoose.connection.on('disconnected', () => {
  console.log('Mongodb connected disconnected')
})


