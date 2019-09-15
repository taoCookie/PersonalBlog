const studyDAO = require('../DAO/studyDAO');
const resp = require('../utils/respUtil');
const url = require('url');

const m = new Map();

function insertStudy(req, res){
    const params = url.parse(req.url, true).query;
    studyDAO.insertStudy(params.type, function(){
        res.writeHead(200);
        res.end(resp('ok', '插入成功', null));
    })
}
m.set('./insertStudy', insertStudy);

function queryStudy(req, res) {
    studyDAO.queryStudy(function(result){
        res.writeHead(200);
        res.end(resp('ok', '查询成功', result[0]));
    })
}
m.set('/queryStudy', queryStudy);

module.exports = m;