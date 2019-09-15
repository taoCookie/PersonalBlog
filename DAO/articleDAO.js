const createConnection = require('./dbutil');

function queryArticle(success){
    const connection = createConnection();
    const querySql = 'select * from article';
    connection.connect();
    connection.query(querySql, function(err, res){
        if(err) {
            console.log(err);
        }else{
            success(res);
        }
    })
    connection.end();
}

function queryArticleByType(type, success){
    const connection = createConnection();
    const querySql = 'select * from article where type=?';
    connection.connect();
    connection.query(querySql, type, function(err, res){
        if(err) {
            console.log(err);
        }else{
            success(res);
        }
    })
    connection.end();
}

function insertArticle(title, type, content, time, count, success){
    const connection = createConnection();
    const insertSql = 'insert into article (title, type, contennt, time, count) values (?, ?, ?, ?, ?)';
    const params = [title, type, content, time, count];
    connection.connect();
    connection.query(insertSql, params, function(err, res){
        if(err){
            console.log(err);
        }else{
            success(res);
        }
    })
    connection.end();
}


module.exports = {
    queryArticle,
    insertArticle,
    queryArticleByType
}