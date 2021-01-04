/*
 * @Author: Ljh
 * @Date: 2020-11-15 18:14:05
 * @LastEditTime: 2020-11-15 19:34:20
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \apiLearn\controller\catController.js
 */
const dbconfig = require('../util/dbconfig');


/**********************************************************************************************/


login = (req, res) => {
    const id = req.query.id;
    const pwd = req.query.pwd;
    let sql = `select distinct uid, admin from user where id = '${id}' and pwd = '${pwd}' and isDelete = 0`;
    console.log(sql)
    let sqlArr = [];
    let callBack = (err, data) => {
        if (err) {
            console.log("connection error")
            res.send({
                'code': 400,
                'error': "没有注册！"
            })
        } else {
            if (data.length === 0) {
                res.send({
                    'code': 400,
                    'error': "用户名或密码错误！或该用户尚未注册！"
                })
            } else {
                res.send({
                    'code': 200,
                    'data': data
                })
            }
        }
    }

    dbconfig.sqlConnect(sql, sqlArr, callBack);
}


/**********************************************************************************************/


register = (req, res) => {
    const id = req.query.id;
    const pwd = req.query.pwd;
    let sql = `select count(*) as num from user where id = '${id}'`;
    console.log(sql)
    let sqlArr = [];
    let callBack = (err, data) => {
        if (err) {
            console.log("connection error")
            res.send({
                'code': 400,
                'error': "数据库连接失败！"
            })
        } else {
            if (data[0].num !== 0) {
                res.send({
                    'code': 200,
                    'status': "用户名已存在！"
                })
            } else {
                let sql2 = `select count(*) as num from user `;
                console.log(sql2)
                let callBack2 = (err, data) => {
                    if (err) {
                        console.log("connection error")
                        res.send({
                            'code': 400,
                            'error': "数据库连接失败！"
                        })
                    } else {
                        const uid = data[0].num + 1;
                        let sql3 = `insert into user(id, pwd, uid, admin) values('${id}', '${pwd}', '${uid}', 0) `;
                        console.log(sql3)
                        let callBack3 = (err2, data2) => {
                            if (err) {
                                console.log("connection error")
                                res.send({
                                    'code': 200,
                                    'status': "已经注册成功！"
                                })
                            } else {
                                res.send({
                                    'code': 200,
                                    'status': "注册成功！"
                                })
                            }
                        }
                        dbconfig.sqlConnect(sql3, sqlArr, callBack3);
                    }
                }
                dbconfig.sqlConnect(sql2, sqlArr, callBack2);
            }
        }
    }

    dbconfig.sqlConnect(sql, sqlArr, callBack);
}


/**********************************************************************************************/


search = (req, res) => {
    const s = req.query.s;
    console.log(s)
        // child_process调用python脚本
    const exec = require('child_process').exec;
    const cmdexec = 'python D:\\api\\apiLearn\\controller\\search.py' + ' ' + s;
    console.log(cmdexec)
    exec(cmdexec, function(error, stdout, stderr) {
        if (stdout.length > 1) {
            stdout = stdout.replace(/[\r\n]/g, "");
            console.log(stdout)
            res.send({
                'code': 200,
                'status': stdout
            })
        } else {
            console.log('you don\'t offer args');
        }
        if (error) {
            console.info('stderr : ' + stderr);
        }
    });
}


/**********************************************************************************************/


alter = (req, res) => {
    const uid = req.query.uid;
    const id = req.query.id;
    const pwd = req.query.pwd;
    let sql = `UPDATE user set id = '${id}',pwd = '${pwd}' where uid = '${uid}'`;
    console.log(sql)
    let sqlArr = [];
    let callBack = (err, data) => {
        if (err) {
            console.log("connection error")
            res.send({
                'code': 400,
                'error': "连接数据库失败！"
            })
        } else {
            res.send({
                'code': 200,
                'status': "用户名密码修改成功！"
            })
        }
    }

    dbconfig.sqlConnect(sql, sqlArr, callBack);
}


/**********************************************************************************************/


check = (req, res) => {
    let sql = `select distinct id from user where admin = 0 and isDelete = 0`;
    console.log(sql)
    let sqlArr = [];
    let callBack = (err, data) => {
        if (err) {
            console.log("connection error")
            res.send({
                'code': 400,
                'error': "连接数据库失败！"
            })
        } else {
            res.send({
                'code': 200,
                'data': data,
                'status': "用户加载成功"
            })
        }
    }
    dbconfig.sqlConnect(sql, sqlArr, callBack);
}


/**********************************************************************************************/
setAdmin = (req, res) => {
    const id = req.query.id
    let sql = `UPDATE user set admin = '1' where id = '${id}'`
    console.log(sql)
    let sqlArr = []
    let callBack = (err, data) => {
        if (err) {
            res.send({
                'code': 400,
                'error': "数据库连接失败!"
            })
        } else {
            res.send({
                'code': 200,
                'status': "授予用户管理员权限成功!"
            })
        }
    }
    dbconfig.sqlConnect(sql, sqlArr, callBack);
}


/**********************************************************************************************/


searchHistoryInsert = (req, res) => {
    const uid = req.query.uid;
    const songId = req.query.songId;
    const songname = req.query.songname;
    const songart = req.query.songart;
    const date = new Date();
    let sql = `insert into song(songId, songname, uid, date, songart) values('${songId}', '${songname}', '${uid}', '${date}' , '${songart}') `;
    console.log(sql)
    let sqlArr = [];
    let callBack = (err, data) => {
        if (err) {
            console.log("connection error")
            res.send({
                'code': 400,
                'error': "连接数据库失败！"
            })
        } else {
            res.send({
                'code': 200,
                'status': "插入成功"
            })
        }
    }
    dbconfig.sqlConnect(sql, sqlArr, callBack);
}


/**********************************************************************************************/


getSearchHistory = (req, res) => {
    const uid = req.query.uid;
    let sql = `select distinct songId, songname, songart, date from song where uid = '${uid}' and isDelete = 0`;
    console.log(sql)
    let sqlArr = [];
    let callBack = (err, data) => {
        if (err) {
            console.log("connection error")
            res.send({
                'code': 400,
                'error': "连接数据库失败！"
            })
        } else {
            res.send({
                'code': 200,
                'data': data,
                'status': "获取搜索历史成功"
            })
        }
    }
    dbconfig.sqlConnect(sql, sqlArr, callBack);
}


/**********************************************************************************************/


loveInsert = (req, res) => {
    const songId = req.query.songId
    const uid = req.query.uid;
    const date = new Date()
    let sql = `insert into love(songId, uid, date) values('${songId}', '${uid}', '${date}') `;
    console.log(sql)
    let sqlArr = [];
    let callBack = (err, data) => {
        if (err) {
            console.log("connection error")
            res.send({
                'code': 400,
                'error': "连接数据库失败！"
            })
        } else {
            res.send({
                'code': 200,
                'status': "添加喜欢音乐列表成功！"
            })
        }
    }
    dbconfig.sqlConnect(sql, sqlArr, callBack);
}


/**********************************************************************************************/


getLoveList = (req, res) => {
    const uid = req.query.uid;
    let sql = `select count(*) as num from love where uid = '${uid}'`;
    console.log(sql)
    let sqlArr = []
    var dataList = []
    let callBack = (err, data) => {
        if (err) {
            console.log("connection error")
            res.send({
                'code': 400,
                'error': "数据库连接失败！"
            })
        } else {
            if (data[0].num === 0) {
                res.send({
                    'code': 200,
                    'data': [{ "songId": '', "songname": '', "songart": '' }],
                    'status': "喜欢列表为空！"
                })
            } else {
                let sql1 = `select distinct songId from love where uid = '${uid}'`;
                console.log(sql1)
                let sqlArr = [];
                let callBack1 = (err, data) => {
                    if (err) {
                        console.log("connection error")
                        res.send({
                            'code': 400,
                            'error': "该音乐已经在喜欢列表！"
                        })
                    } else {
                        const num = data.length
                        for (i = 0; i < num; i++) {
                            const songId = data[i].songId
                            const sql2 = `select distinct songId, songname, songart from song where uid = '${uid}' and songId = '${songId}'`;
                            console.log(sql2)
                            let callBack2 = (err, data) => {
                                if (err) {
                                    console.log("connection error")
                                    res.send({
                                        'code': 400,
                                        'error': "连接数据库失败！"
                                    })
                                } else {
                                    var temp = JSON.stringify(data[0])
                                    var data = JSON.parse(temp)
                                        // console.log(data)
                                    dataList.push(data)
                                        // console.log(dataList)
                                }
                                if (dataList.length == num) {
                                    res.send({
                                        'code': 200,
                                        'data': dataList,
                                        'status': "喜欢列表获取成功"
                                    })
                                }
                            }
                            dbconfig.sqlConnect(sql2, sqlArr, callBack2);
                        }
                    }
                }
                dbconfig.sqlConnect(sql1, sqlArr, callBack1);
            }
        }
    }

    dbconfig.sqlConnect(sql, sqlArr, callBack);
}


/**********************************************************************************************/


deleteHistory = (req, res) => {
    const uid = req.query.uid;
    const songId = req.query.songId;
    let sql = `UPDATE song set isDelete = '1' where uid = '${uid}' and songId = '${songId}'`;
    console.log(sql)
    let sqlArr = [];
    let callBack = (err, data) => {
        if (err) {
            console.log("connection error")
            res.send({
                'code': 400,
                'error': "连接数据库失败！"
            })
        } else {
            res.send({
                'code': 200,
                'status': "删除音乐历史成功！"
            })
        }
    }
    dbconfig.sqlConnect(sql, sqlArr, callBack);
}


/**********************************************************************************************/


deleteUser = (req, res) => {
    const id = req.query.id;
    let sql = `UPDATE user set isDelete = '1' where id = '${id}'`;
    console.log(sql)
    let sqlArr = [];
    let callBack = (err, data) => {
        if (err) {
            console.log("connection error")
            res.send({
                'code': 400,
                'error': "连接数据库失败！"
            })
        } else {
            res.send({
                'code': 200,
                'status': "删除用户成功！"
            })
        }
    }
    dbconfig.sqlConnect(sql, sqlArr, callBack);
}


/**********************************************************************************************/


deleteLove = (req, res) => {
    const uid = req.query.uid;
    const songId = req.query.songId;
    let sql = `delete from love where uid = '${uid}' and songId = '${songId}'`;
    console.log(sql)
    let sqlArr = [];
    let callBack = (err, data) => {
        if (err) {
            console.log("connection error")
            res.send({
                'code': 400,
                'error': "连接数据库失败！"
            })
        } else {
            res.send({
                'code': 200,
                'status': "删除喜欢音乐成功！"
            })
        }
    }
    dbconfig.sqlConnect(sql, sqlArr, callBack);
}


/**********************************************************************************************/


getCommentsOnline = (req, res) => {
    const s = req.query.s;
    console.log(s)
        // child_process调用python脚本
    const exec = require('child_process').exec;
    const cmdexec = 'python D:\\api\\apiLearn\\controller\\comments.py' + ' ' + s;
    console.log(cmdexec)
    exec(cmdexec, function(error, stdout, stderr) {
        if (stdout.length > 1) {
            stdout = stdout.replace(/[\r\n]/g, "");
            const temp = stdout.split('+')
            const songId = temp[0]
            const comment_list = temp[1].split('|')
            console.log(comment_list)

            const comment = comment_list[0];
            const id = comment_list[1];
            const comment1 = comment_list[2];
            const id1 = comment_list[3];
            const comment2 = comment_list[4];
            const id2 = comment_list[5];
            const comment3 = comment_list[6];
            const id3 = comment_list[7];
            const comment4 = comment_list[8];
            const id4 = comment_list[9];
            let sql = `insert into comments(songId, id, comment) values('${songId}', '${id}', '${comment}');
                        insert into comments(songId, id, comment) values('${songId}', '${id1}', '${comment1}');
                        insert into comments(songId, id, comment) values('${songId}', '${id2}', '${comment2}');
                        insert into comments(songId, id, comment) values('${songId}', '${id3}', '${comment3}');
                        insert into comments(songId, id, comment) values('${songId}', '${id4}', '${comment4}')`
            console.log(sql)
            let sqlArr = []
            let callBack = (err, data) => {
                if (err) {
                    res.send({
                        'code': 400,
                        'error': "数据库连接失败!"
                    })
                } else {
                    res.send({
                        'code': 200,
                        'status': "评论已经保存在数据库中!"
                    })
                }
            }
            dbconfig.sqlConnect(sql, sqlArr, callBack);
        } else {
            console.log('you don\'t offer args');
        }
        if (error) {
            console.info('stderr : ' + stderr);
        }
    });
}


/**********************************************************************************************/


writeComment = (req, res) => {
    const uid = req.query.uid
    const id = req.query.id
    const songId = req.query.songId
    const comment = req.query.comment
    let sql = `insert into comments(uid, id, songId, comment) values('${uid}', '${id}', '${songId}', '${comment}')`
    let sqlArr = []
    let callBack = (err, data) => {
        if (err) {
            res.send({
                'code': 400,
                'error': "数据库连接失败!"
            })
        } else {
            res.send({
                'code': 200,
                'status': "评论保存成功!"
            })
        }
    }
    dbconfig.sqlConnect(sql, sqlArr, callBack);
}


/**********************************************************************************************/


getCommentsAll = (req, res) => {
    const songId = req.query.songId
    let sql = `select distinct id, comment from comments where songId = '${songId}'`
    let sqlArr = []
    let callBack = (err, data) => {
        if (err) {
            res.send({
                'code': 400,
                'error': "数据库连接失败!"
            })
        } else {
            res.send({
                'code': 200,
                'data': data,
                'status': "评论加载成功!"
            })
        }
    }
    dbconfig.sqlConnect(sql, sqlArr, callBack);
}


/**********************************************************************************************/


getCommentsSelf = (req, res) => {
    const uid = req.query.uid
    let sql = `select distinct comments.id, comments.comment, song.songname from comments, song where comments.uid = '${uid}' and song.songId = comments.songId`
    console.log(sql)
    let sqlArr = []
    let callBack = (err, data) => {
        if (err) {
            res.send({
                'code': 400,
                'error': "数据库连接失败!"
            })
        } else {
            res.send({
                'code': 200,
                'data': data,
                'status': "评论加载成功!"
            })
        }
    }
    dbconfig.sqlConnect(sql, sqlArr, callBack);
}



module.exports = {
    login,
    register,
    search,
    alter,
    searchHistoryInsert,
    getSearchHistory,
    loveInsert,
    getLoveList,
    deleteHistory,
    deleteLove,
    getCommentsOnline,
    writeComment,
    getCommentsAll,
    getCommentsSelf,
    setAdmin,
    check,
    deleteUser
}