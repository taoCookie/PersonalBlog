const articlDAO = require('../DAO/articleDAO');
const resp = require('../utils/respUtil');
const url = require('url');

const m = new Map();

function queryArticle(req, res){
    articlDAO.queryArticle(function(result){
        res.writeHead(200);
        res.end(resp('ok', '查询成功', result[0]))
    })
}
m.set('/queryArticle', queryArticle);

function queryArticleByType(req, res){
    const params = url.parse(req.url, true).query;
    articlDAO.queryArticleByType(params.type, function(result){
        res.writeHead(200);
        res.end(resp('ok', '查询成功', result[0]));
    })
}
m.set('/queryArticleByType', queryArticleByType);

function insertArticle(req, res){
    const params = url.parse(req.url, true).query;
    articlDAO.insertArticle(params.title, params.type, params.content, params.time, params.count, function(){
        res.writeHead(200);
        res.end(resp('ok', '插入成功', null));
    })
}
m.set('/insertArticle', insertArticle);

module.exports = m;