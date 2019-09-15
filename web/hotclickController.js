const hotclickDAO = require('../DAO/hotclickDAO');
const resp = require('../utils/respUtil');
const url = require('url');

const m = new Map();

function insertHotclick(req, res){
    const params = url.parse(req.url, true).query;
    hotclickDAO.insertHotclick(params.type, function(){
        res.writeHead(200);
        res.end(resp('ok', '插入成功', null));
    })
}
m.set('./insertHotclick', insertHotclick);

function queryHotclick(req, res) {
    hotclickDAO.queryHotclick(function(result){
        res.writeHead(200);
        res.end(resp('ok', '查询成功', result[0]));
    })
}
m.set('/queryHotclick', queryHotclick);

module.exports = m;