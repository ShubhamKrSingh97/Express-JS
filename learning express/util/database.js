const mysql=require('mysql2');
const pool=mysql.createPool({
    host: 'localhost',
    user: 'root',
    database: 'express_js',
    password:'abc123'
});
module.exports=pool.promise();