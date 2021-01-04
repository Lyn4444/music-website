/*
 * @Author: ljh
 * @Date: 2020-11-15 18:14:13
 * @LastEditTime: 2020-11-15 19:22:41
 * @LastEditors: ljh
 * @Description: In User Settings Edit
 * @FilePath: \apiLearn\util\dbconfig.js
 */

const mysql = require("mysql")

module.exports = {
    //数据库配置
    config: {
        host: 'localhost',
        port: '3306',
        user: 'root',
        password: 'root',
        database: 'music',
        multipleStatements: true
    },
    //连接数据库，使用连接池方式
    //连接池对象
    sqlConnect: function(sql, sqlArr, callBack) {
        const pool = mysql.createPool(this.config)
        pool.getConnection(function(err, connection) {
            if (err) {
                console.log('error');
                return;
            }
            console.log('connect sqlConnect success');
            connection.query(sql, sqlArr, callBack);
            connection.release();
        })
    }
}