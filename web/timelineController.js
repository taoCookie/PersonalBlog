const timelineDAO = require('../DAO/timelineDAO');
const resp = require('../utils/respUtil');
const url = require('url');

const m = new Map();

function insertTimeline(req, res){
    const params = url.parse(req.url, true).query;
    timelineDAO.insertTimeline(params.type, function(){
        res.writeHead(200);
        res.end(resp('ok', '插入成功', null));
    })
}
m.set('./insertTimeline', insertTimeline);

function queryTimeline(req, res) {
    timelineDAO.queryTimeline(function(result){
        res.writeHead(200);
        res.end(resp('ok', '查询成功', result[0]));
    })
}
m.set('/queryTimeline', queryTimeline);

module.exports = m;