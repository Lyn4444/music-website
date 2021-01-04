/*
 * @Author: ljh
 * @Date: 2020-11-15 18:14:13
 * @LastEditTime: 2020-11-15 19:23:32
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \apiLearn\routes\index.js
 */


const express = require('express');
const router = express.Router();
const controller = require('../controller/catController');


router.get('/register', controller.register); // 注册
router.get('/login', controller.login); // 登录
router.get('/search', controller.search); // 搜索
router.get('/alter', controller.alter); // 修改密码
router.get('/check', controller.check); // 用户信息加载
router.get('/setAdmin', controller.setAdmin); // 授予用户管理员权限
router.get('/searchHistoryInsert', controller.searchHistoryInsert) // 搜索历史
router.get('/getSearchHistory', controller.getSearchHistory) // 获取搜索历史
router.get('/loveInsert', controller.loveInsert) // 喜欢音乐
router.get('/getLoveList', controller.getLoveList) // 获取喜欢音乐列表
router.get('/deleteHistory', controller.deleteHistory) // 删除音乐历史
router.get('/deleteUser', controller.deleteUser) // 删除用户成功
router.get('/deleteLove', controller.deleteLove) // 删除喜欢音乐
router.get('/getCommentsOnline', controller.getCommentsOnline) // 获取网上评论
router.get('/writeComment', controller.writeComment) // 写评论
router.get('/getCommentsAll', controller.getCommentsAll) // 获取歌曲所有评论
router.get('/getCommentsSelf', controller.getCommentsSelf) // 获取用户所有评论

module.exports = router;