<!--
 * @Author: Ljh
 * @Date: 2020-06-25 02:45:30
 * @LastEditTime: 2020-06-25 03:00:00
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \musicweb\music\src\view\myComments.vue
-->


<template>
  <div class="mycomments">
      <div class="contain">
        <div class="big-box">
          <div class="big-contain">
            <div class="btitle">我的评论</div>
              <div class="bform">
                <div id="m-header">
                  <div class="center">
<!--                    <li v-for="(item, index) in mycommentsList"-->
<!--                    :class="item.class">-->
<!--                    {{index}}) 评论歌曲：{{item.songname}}   <strong>|||</strong>  评论内容：{{item.comment}}-->
<!--                    </li>-->
                    <table>
                      <tr>
                        <th>评论歌曲</th>
                        <th>评论内容</th>
                      </tr>
                      <tr v-for="(item, index) in mycommentsList" :class="item.class">
                        <td v-for="column in mycommentsListColumn">{{item[column]}}</td>
                      </tr>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
</template>

<script>
export default {
  name: 'mycomments',
  data() {
    return {
        isShow: true,
        search_input_ahead: '',
        search_input_behind: '',
        username: window.sessionStorage.getItem("username"),
        userpwd: window.sessionStorage.getItem("userpwd"),
        admin: window.sessionStorage.getItem("admin"),
        uid: window.sessionStorage.getItem("uid"),
        mycommentsListColumn: ['songname', 'comment'],
        mycommentsList: [],
        songId: window.sessionStorage.getItem("songId"),
        songname: window.sessionStorage.getItem("songname"),
        songart: window.sessionStorage.getItem("songart"),
    }
  },
  methods: {
      getCommentsSelf() {
          const url = '/getCommentsSelf?songId=' + window.sessionStorage.getItem("songId") + '&uid=' + window.sessionStorage.getItem("uid");
          this.$axios.get(url).then(res => {
            if (res.data.code === 200) {
                console.log(res.data.status)
                for (let i = 0 ; i < res.data.data.length ; i ++) {
                    this.mycommentsList.push(res.data.data[i])
                }
                console.log(this.commentsList)
            } else {
                console.log(res.data.error)
            }
          })
      }
  },
  mounted() {
      this.getCommentsSelf();
  }
}
</script>

<style scoped lang = "less">
.mycomments{
		width: 100vw;
		height: 100vh;
		box-sizing: border-box;
		background-image: url("http://pic.yupoo.com/2020ljhothers/b70d71e4/7f1820f8.jpg");
  		background-size: cover;
}

.contain{
	width: 75%;
	height: auto;
	background-color: #ffffff50;
  position: relative;
	top: 50%;
	left: 50%;
	transform: translate(-50%,-50%);
	border-radius: 20px;
	box-shadow: 0 0 3px #f0f0f0,
				0 0 6px #f0f0f0;
}


.big-box{
	width: 100%;
	height: 100%;
}

.big-contain{
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
}

.btitle{
	font-size: 1.5em;
	font-weight: bold;
	color: rgb(43, 13, 112);
}

.bform{
	width: 100%;
	height: 15%;
	padding: 2em 0;
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	align-items: center;
}

.active {
    position: absolute;
    background-color: rgb(218,185,166);
    width: 5.68rem;
    height: auto;
    right: 0;
    top: 0;
}

#m-header {
  background-color: #ffffff00;
  display: flex;
  padding: 1.08rem 1.6rem;

  .center {
      flex: 1;
      text-align: left;
      position: relative;
  }
}


.item-normal, .item-last {
    font-family: 'Courier New', Courier, monospace;
    font-weight: 400;
    color: white;
    font-size: 20px;
    padding-left: 0.78rem;
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
    text-align: left;
    position: relative;
    list-style-type: none;
    cursor: pointer;
}

.button-box {
  width: 100%;
	height: 40%;
	padding: 2em 0;
	display: flex;
	flex-direction: row;
	justify-content: space-around;
	align-items: center;
}

.bbutton{
	width: 20%;
	height: 40px;
	border-radius: 24px;
	border: none;
	outline: none;
	background-color: rgb(218,185,166);
	color: #fff;
	font-size: 0.9em;
	cursor: pointer;
}

.button-box input{
	width: 18%;
	height: 30px;
	border: none;
	outline: none;
  padding-left: 2px;
	border-bottom: #302c2c 1px solid;
 	background-color: transparent;
	font-size: 24px;
	font-family: 'Courier New', Courier, monospace;
}

th,td{
  text-align: center;
  padding: 5px 15px;
}
</style>
