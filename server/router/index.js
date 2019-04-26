/**
 * 路由集合
 */
const express = require('express');
const router = express.Router();
const controllers = require('../controllers')

// 测试
router.get('/api/demo', controllers.demo)
router.post('/api/login', controllers.login)

module.exports = router;