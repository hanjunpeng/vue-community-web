/**
 * 路由集合
 */
const express = require('express');
const router = express.Router();
const controllers = require('../controllers')

// 测试
router.get('/demo', controllers.demo)
router.get('/login', controllers.login)

module.exports = router;