const createConnection = require('./dbutil');

function insertEveryday(content, time, success){
    const connection = createConnection();
    const insertSql = 'insert into everyday (content, time) values (?, ?)';
    const params = [content, time];
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

function queryEveryday(success){
    const connection = createConnection();
    const querySql = 'select * from everyday';
    connection.connect();
    connection.query(querySql, function(err, res){
        if(err){
            console.log(err);
        }else{
            success(res);
        }
    })
    connection.end();
}

module.exports = {
    insertEveryday,
    queryEveryday
}