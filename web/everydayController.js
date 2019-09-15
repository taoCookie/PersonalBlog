const everydayDAO = require('../DAO/everydayDAO');
const resp = require('../utils/respUtil');
const url = require('url');

const m = new Map();

function insertEveryday(req, res){
    const params = url.parse(req.url, true).query;
    everydayDAO.insertEveryday(params.content, params.time, function(){
        res.writeHead(200, {"Content-Type": "text/html; charset=utf-8" });
        res.end(resp('ok', '插入成功', null));
    })
}

m.set('/inserEveryday', insertEveryday);

function queryEveryday(req, res){
    everydayDAO.queryEveryday(function(result){
        res.writeHead(200);
        res.end(resp('ok', '查询成功', result[0]));
    })
}

m.set('/queryEveryday', queryEveryday);

module.exports = m;