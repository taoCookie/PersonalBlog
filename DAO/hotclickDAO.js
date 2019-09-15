const createConnection = require('./dbutil');

function insertHotclick(title, content, success){
    const connection = createConnection();
    const insertSql = 'insert into hotclick (title, content) values (?, ?)';
    const params = [title, content];
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

function queryHotclick(success){
    const connection = createConnection();
    const querySql = 'select * from hotclick';
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
    insertHotclick,
    queryHotclick
}