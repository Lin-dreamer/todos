// 导入mongoosem模块
const mongoose = require('mongoose');

// 数据库连接
mongoose.connect('mongodb://localhost:27017/todo', { useNewUrlParser: true, useUnifiedTopology: true });

console.log('数据库连接成功');