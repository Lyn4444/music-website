# Created in 2020-6-16 by Ljh
# Completed in 2020-6-24 by Ljh


***


## mysql
```
    username:root,password:root,database:music,table:user,song,playlist,love
```


***


## api list
```
    router.get('/register', controller.register);                               // 注册
    router.get('/login', controller.login);                                     // 登录
    router.get('/search', controller.search);                                   // 搜索
    router.get('/alter', controller.alter);                                     // 修改密码
    router.get('/check', controller.check);                                     // 用户信息加载
    router.get('/setAdmin', controller.setAdmin);                               // 授予用户管理员权限
    router.get('/searchHistoryInsert', controller.searchHistoryInsert)          // 搜索历史
    router.get('/getSearchHistory', controller.getSearchHistory)                // 获取搜索历史
    router.get('/loveInsert',controller.loveInsert)                             // 喜欢音乐
    router.get('/getLoveList', controller.getLoveList)                          // 获取喜欢音乐列表
    router.get('/deleteHistory', controller.deleteHistory)                      // 删除音乐历史
    router.get('/deleteUser', controller.deleteUser)                            // 删除用户成功
    router.get('/deleteLove', controller.deleteLove)                            // 删除喜欢音乐
    router.get('/getCommentsOnline', controller.getCommentsOnline)              // 获取网上评论
    router.get('/writeComment', controller.writeComment)                        // 写评论
    router.get('/getCommentsAll', controller.getCommentsAll)                    // 获取歌曲所有评论
    router.get('/getCommentsSelf', controller.getCommentsSelf)                  // 获取用户所有评论
 ```


***


## Command Line
#### Install Dependent Commands
##### node.js安装：在官网 `http://nodejs.cn/` 上下载最新版本
##### express安装：
```
    npm install express -g
    npm install -g express-generator
```
##### python第三方库cloudmusic安装(可以在pycharm上快速安装)：
```
    pip install cloudmusic
```
##### nodemon安装：
```
    npm install nodemon -g
```
##### node_modules安装：
```
    npm install
```
#### Api Run Command
```
    nodemon app.js
```


***


## Precautions
1)本项目使用node.js调用了两个python脚本`search.py`和`comments.py`，
所以在运行本项目前需要在`\apiLearn\controller\catController.js`路径中找到`search`和`getCommentsOnline`方法，
并把对应方法下面的`cmdexec`变量中调用到python脚本的绝对路径进行修改。
该`cmdexec`变量为：
```
    const cmdexec = 'python D:\\api\\apiLearn\\controller\\search.py' + ' ' + s;                // 在search方法下面
    const cmdexec = 'python D:\\api\\apiLearn\\controller\\comments.py' + ' ' + s;              // 在getCommentsOnline方法下面
```

2）本项目使用的IDE为IntelliJ IDEA 2020.1.1 x64，近期会部署在服务器上，该Readme.md文档只是后端说明文档