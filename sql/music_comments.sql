-- MySQL dump 10.13  Distrib 8.0.21, for Win64 (x86_64)
--
-- Host: localhost    Database: music
-- ------------------------------------------------------
-- Server version	8.0.21

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `comments`
--

DROP TABLE IF EXISTS `comments`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `comments` (
  `id` varchar(50) DEFAULT NULL,
  `uid` int DEFAULT NULL,
  `songId` varchar(50) NOT NULL,
  `comment` varchar(200) DEFAULT NULL,
  KEY `fk_uid_comment` (`uid`),
  CONSTRAINT `fk_uid_comment` FOREIGN KEY (`uid`) REFERENCES `user` (`uid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `comments`
--

LOCK TABLES `comments` WRITE;
/*!40000 ALTER TABLE `comments` DISABLE KEYS */;
INSERT INTO `comments` VALUES ('哲也love',NULL,'483671599','八年过去了，郑爽还是如八年前的流星雨一样纯洁如外表，干净而亲切，就如这歌一样清新的声音仿佛把立夏的一切描述的淋漓尽致。'),('隔壁小俏',NULL,'483671599','郑爽大概长了一张初恋的脸，无关所有，你看她叛逆，犯傻，糊涂，但还是相信她就是一个年轻又干净的女孩。谁能相信她已经出道八年了呢，还是那么干净的感觉。好喜欢陆之昂和立夏，不管书里怎么说，就算知道官配，就算知道最后不可能在一起，就是喜欢这一对。(不拉真人cp,只是陆之昂和立夏)'),('别多会少_不如莫遇',NULL,'483671599','看过三遍原著，最让我爱的还是陆之昂，最让我心疼的还是遇见。看了剧，还是喜欢陆之昂，站司夏CP，但是却真的喜欢之昂和立夏。有的人说之昂对立夏只是朋友或者是兄妹。我却一直相信他是喜欢她的。是一场盛大的，无声无息的暗恋。'),('感谢你走过黑暗来到我身边',NULL,'483671599','我的世界里有我一个人就好，已经足够热闹。  ——郭敬明《夏至未至》'),('胡萝卜兔在路上5555',NULL,'483671599','昨天立夏的独白:太多时候，我们宁愿去制造一个假象，也不愿说出真正的原因。少年的心，就像雨后蜗牛的触角一样柔软，一喷就退缩，最后只留下坚硬的躯壳。傅小司，对不起，我们之间最好的方式就是保持距离。(表白立夏)'),('lyn',2,'483671599','text'),('undefined',NULL,'114741','备胎金曲'),('undefined',NULL,'114741','undefined'),('undefined',NULL,'114741','undefined'),('undefined',NULL,'114741','undefined'),('undefined',NULL,'114741','undefined'),('undefined',NULL,'114741','备胎金曲'),('undefined',NULL,'114741','undefined'),('undefined',NULL,'114741','undefined'),('undefined',NULL,'114741','undefined'),('undefined',NULL,'114741','undefined'),('民谣故事',NULL,'386844','2010年冬天，我按照豆瓣上给的地址，去了石家庄一家纹身店，买到50块一张的原版cd，店主是万青的朋友，说很少有人会来买。没过多久，万青火了。那一年我还是个摇滚青年，为了一张专辑穿越大半个中国，我在现场甩头，pogo，跳水，挤着要签名，合影，现在我只会站在最后一排，一个人听歌，然后离开。'),('我的球鞋有点脏',NULL,'386844','多数人25岁就死了，一直到75岁才埋。可我不愿意这样'),('路石头儿',NULL,'386844','生于理想，死于欲望'),('COLDHART',NULL,'386844','求石家庄人的心里阴影面积'),('帐号已注销',NULL,'386844','我以后要开一间电影院，或者咖啡店冰淇淋店，都行。在每个星期每一天放万青的三首歌，循环播放。如果有谁听到歌声会心一笑，或者说:“呀！这是万青。”无论是谁，逃犯还是摇滚乐手，丑陋还是美丽，流浪汉还是作家，都请进来，免单。如果可以，我希望他可以和我喝酒。如果未满十八，我们可以喝果汁儿。'),('最好不要想我了',NULL,'1348568675','就算沒有肺炎 我也依舊一個人宅在家'),('西之酱',NULL,'1348568675','我常幻想，我坐在城市的楼顶上，我抽着刚点燃的烟，微微抬头望向远处，幻想我这么一生遇见的人，那些让我印象深刻的事，想完就跳下去，用那年最开始我选择的方式结束这一生。可我就一胆小鬼，一个人住，连出门倒个垃圾都要挑很晚没有人的时候才出去...啊哈哈该睡觉了，我一定可以撑到那个时候解决自己'),('不要半夜裡躲在被窩裡哭了',NULL,'1348568675','原来感情也会回光返照呀 最后死灰不再复燃'),('名字够长就会有人傻乎乎的念',NULL,'1348568675','人过于聪明才会真正的孤独'),('海綿宝宝喜歡我',NULL,'1348568675','“别为了那些不属于你的观众去演绎你不擅长的演员。”'),('顾砚秋_savoki',NULL,'1489681309','宝贝晚安 宝贝早点睡  宝贝我还要去下一场派对  好喜欢这一句啊哈哈哈'),('AY楊佬叁',NULL,'1489681309','薛女士让我发誓我是自愿来的，真好听，太棒了，女明星的歌超级哇塞！嗯。'),('顾砚秋_savoki',NULL,'1489681309','宝贝晚安 宝贝早点睡  宝贝我还要去下一场派对  好喜欢这一句啊哈哈哈'),('AY楊佬叁',NULL,'1489681309','薛女士让我发誓我是自愿来的，真好听，太棒了，女明星的歌超级哇塞！嗯。'),('无言之泪',NULL,'174944','人家徐良都是自己写词自己作曲自己唱或找人对唱，他既不是选秀歌手，也没有像exo那样有大公司包装，而且也不像有的歌手唱歌就为了赚钱捞金。徐良能红靠的是自己的实力。你们可以不喜欢他的曲风他的作品，也可以提出批评意见，但如果是为了黑人而黑人，我觉得这就是素质问题了。'),('北方有只陈二狗',NULL,'174944','看来网易真是一个有逼格的地方，这种网络歌曲入不了很多人的法眼。那要不要聊聊欧洲莫扎特、贝多芬、舒伯特、肖邦、弗朗兹李斯特、柴科夫斯基。对了，那些不是非主流的听众们，能不能给我讲一下，李斯特和肖邦音乐风格的异同。还有一个问题，能不能分析一下威尔第的歌剧《茶花女》中的《饮酒歌》？'),('一个苏的天堂',NULL,'174944','曾经多少人非主流过，如今自觉逼格高了反过来在这装'),('yi002',NULL,'174944','好听就好，唱功好的你会听？宋祖英的歌吗？'),('_Stupendous',NULL,'174944','其实许嵩也好，徐良汪苏泷也好，对于别人我不知道，反正对我都是青春的象征，他们陪我走过我的青葱岁月，痛苦悲伤也好，开心胡闹也好。这跟他们的唱功和创作水平无关，能在你的生命中留过痕迹的歌和歌手，都是有意义的。'),('admin',1,'174944','llll');
/*!40000 ALTER TABLE `comments` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-12-24 17:20:12
