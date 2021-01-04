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
-- Table structure for table `song`
--

DROP TABLE IF EXISTS `song`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `song` (
  `songId` varchar(50) NOT NULL,
  `songname` varchar(50) NOT NULL,
  `uid` int NOT NULL,
  `date` varchar(50) NOT NULL,
  `songart` varchar(50) NOT NULL,
  `isDelete` int NOT NULL DEFAULT '0',
  PRIMARY KEY (`songId`,`uid`,`date`),
  KEY `fk_uid_songsong` (`uid`),
  CONSTRAINT `fk_uid_songsong` FOREIGN KEY (`uid`) REFERENCES `user` (`uid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `song`
--

LOCK TABLES `song` WRITE;
/*!40000 ALTER TABLE `song` DISABLE KEYS */;
INSERT INTO `song` VALUES ('114741','痴心绝对 电视剧《爱上痞子男》主题曲',1,'Tue Dec 08 2020 00:04:03 GMT+0800 (GMT+08:00)','李圣杰',1),('114741','痴心绝对 电视剧《爱上痞子男》主题曲',1,'Tue Dec 08 2020 00:04:05 GMT+0800 (GMT+08:00)','李圣杰',1),('1475596604','YY',1,'Tue Dec 08 2020 00:38:45 GMT+0800 (GMT+08:00)','初音ミク',1),('1489681309','爱情派对',1,'Tue Dec 08 2020 01:44:32 GMT+0800 (GMT+08:00)','薛明媛',1),('1489681309','爱情派对',1,'Tue Dec 08 2020 01:44:33 GMT+0800 (GMT+08:00)','薛明媛',1),('1501149017','Can’t Take My Eyes Off You (BBC Live Version)',1,'Tue Dec 08 2020 00:41:45 GMT+0800 (GMT+08:00)','Shawn Mendes',1),('174944','后会无期',1,'Tue Dec 08 2020 01:46:40 GMT+0800 (GMT+08:00)','徐良',0),('386844','杀死那个石家庄人',1,'Tue Dec 08 2020 00:40:01 GMT+0800 (GMT+08:00)','万能青年旅店',1),('483671599','追光者 电视剧《夏至未至》插曲',2,'Mon Nov 30 2020 20:45:29 GMT+0800 (GMT+08:00)','岑宁儿',0);
/*!40000 ALTER TABLE `song` ENABLE KEYS */;
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
