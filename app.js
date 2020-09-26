// 引入express框架
const express = require('express');
// 路径处理模块
const path = require('path');
// 引入body-parser模块
const bodyParser = require('body-parser');

// 连接数据库
require('./model/connect')

// 创建服务器对象
const app = express();

// 静态资源访问服务功能
app.use(express.static(path.join(__dirname, 'public')));

// 处理json字符串类型的post请求参数
app.use(bodyParser.json());

// 根路由
app.get('/', (req, res) => {
    res.redirect('/todo.html');
});

app.use('/todo', require('./route/todo')); // todo项目路由

console.log('服务器启动成功，监听端口中');
app.listen(80);