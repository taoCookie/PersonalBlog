const createConnection = require('./dbutil');

function insertStudy(title, content, success){
    const connection = createConnection();
    const insertSql = 'insert into study (title, content) values (?, ?)';
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

function queryStudy(success){
    const connection = createConnection();
    const querySql = 'select * from study';
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
    insertStudy,
    queryStudy
}