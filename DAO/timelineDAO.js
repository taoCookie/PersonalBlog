const createConnection = require('./dbutil');

function insertTimeline(time, desc, success){
    const connection = createConnection();
    const insertSql = 'insert into timeline (title, content) values (?, ?)';
    const params = [time, desc];
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

function queryTimeline(success){
    const connection = createConnection();
    const querySql = 'select * from timeline';
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
    insertTimeline,
    queryTimeline
}