const express = require('express');
const fs = require('fs');
// 在服务端启动webpack
// const webpack = require('webpack');
// const webpackDevMiddleware = require('webpack-dev-middleware');
// const compiler = webpack(require('../build/webpack.server'));

const config = require('./config');
const loader = require('./loader');

const whiteList = ['http://localhost:3000', 'http://localhost:8000', 'http://192.168.1.106:8000'];

const app = express();

// app.use(webpackDevMiddleware(compiler));
// app.use(express.static('../dist'));

app.use(function (req, res, next) {
  const origin = req.headers.origin;
  if (whiteList.includes(origin)) {
    res.setHeader('Access-Control-Allow-Origin', origin);
    res.setHeader('Access-Control-Allow-Headers', 'content-type');
    res.setHeader('Access-Control-Allow-Methods', 'PUT');
    // 允许携带凭证
    res.setHeader('Access-Control-Allow-Credentials', true);
    // 试探请求时间
    res.setHeader('Access-Control-Max-Age', 6);
    // 告诉客户端，响应头回复的数据是安全的
    res.setHeader('Access-Control-Expose-Headers', 'name');
    // 有了上面的设置，客户端就可以得到响应回复的数据
    res.setHeader('name', 'typ');
    // 设置content-type
    res.setHeader('Content-Type', 'text/plain;charset=utf-8');
  }
  next();
});

app.use(express.static(config.page_path));

// 每日一句更新
app.post('/insertEveryDay', loader.get('/insertEveryDay'));
// 每日一句接口
app.get('/queryEveryDay', loader.get('/queryEveryDay'));
// 文章更新
app.post('/insertArticle', loader.get('/insertArticle'));
// 文章查询
app.get('/queryArticle', loader.get('/queryArticle'));
// 按type查询文章
app.get('/queryArticleByType', loader.get('/queryArticleByType'));
// 查询最热点击
app.get('/queryHotclick', loader.get('/queryHotclick'));
// 更新最热点击
app.post('/insertHotclick', loader.get('/insertHotclick'));
// 查询学无止境表
app.get('/queryStudy', loader.get('/queryStudy'));
// 更新学无止境表
app.post('/insertStudy', loader.get('/insertStudy'));
// 查询时间轴
app.get('/queryTimeline', loader.get('/queryTimeline'));
// 插入时间轴
app.post('/insertTimeline', loader.get('/insertTimeline'));
// 按页查询评论

//  为vue-router提供的接口，只需返回html
app.get('*', function (req, res) {
  const HTML = fs.readFileSync('../dist/index.html');
  res.end(HTML);
});

app.listen(config.port, function () {
  console.log(`服务已在端口号${config.port}启动`);
});
