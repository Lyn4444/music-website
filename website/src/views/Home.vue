<!--
 * @Author: Ljh
 * @Date: 2020-11-20 06:47:27
 * @LastEditTime: 2020-11-03 22:06:33
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \website\src\view\Home.vue
-->


<template>
  <div id="home">

    <div id="m-header">
      <div class="right">
        <div class="tittlebox">
          <strong class="tittle">小怪兽music</strong>
        </div>
        <i class="fa fa-bars fa-lg" @click.stop="didClickMenus"></i>
        <ul :class="{active: isShow, none: !isShow}">
          <li class="item-top"></li>
          <li v-for="(item, index) in menus"
              :key="index"
              @click="didSelectItem(index)"
              :class="item.class">
            {{ item.name }}
          </li>
        </ul>
      </div>
    </div>

    <div id="content">
      <div class="input">
        <input
          placeholder="search"
          type="text"
          v-model="search_input"
          @keyup.enter="search"
        >
      </div>


      <div style="padding:10px 0;">
        <Aplayer autoplay
                 :music="{
            title: '最后的旅行 - 记《龙族》绘梨衣（日语版）',
            artist: 'Rainton桐',
            src: 'https://music.163.com/song/media/outer/url?id=444803329.mp3',
            pic: 'https://p3.music.126.net/olZQbyoMkumKYkq-idJbRg==/109951162817853721.jpg'

        }"
                 :list="musicList">
        </Aplayer>
      </div>

      <div class="button-box">
        <button class="bbutton" @click="loveInsert">添加到喜欢列表</button>
        <button class="bbutton1" @click="getCommentsAll">查看该歌曲热门评论</button>
        <input placeholder="Comment" type="text" v-model="comment_input">
        <button class="bbutton2" @click="writeComment">为该歌曲写评论</button>
      </div>


    </div>
  </div>
</template>

<script>
import Aplayer from 'vue-aplayer'

export default {
  name: "Home",
  data() {
    return {
      isShow: false,
      menus: [
        {
          name: "账号信息",
          class: "item-normal"
        },
        {
          name: "听歌历史",
          class: "item-normal"
        },
        {
          name: "喜欢列表",
          class: "item-normal"
        },
        {
          name: "我的评论",
          class: "item-normal"
        },
        {
          name: "登出",
          class: "item-normal"
        }
      ],

      musicList: [
        {
          title: '最后的旅行 - 记《龙族》绘梨衣（日语版）',
          artist: 'Rainton桐',
          src: 'https://music.163.com/song/media/outer/url?id=444803329.mp3',
          pic: 'https://p3.music.126.net/olZQbyoMkumKYkq-idJbRg==/109951162817853721.jpg'
        }
      ],
      songNameTemp: '',
      search_input: '',
      comment_input: '',
      songId: '',
      songname: '',
      songart: ''
    }
  },
  components: {
    Aplayer
  },
  mounted() {
    document.onclick = () => {
      if (this.isShow) {
        this.isShow = false;
      }
    };
    let screenWidth = window.screen.width;
    let baseWidth = 1920;
    this.iSize = (screenWidth / baseWidth) * 100 + 'px';
    this.login();
    if (window.sessionStorage.getItem("admin") == 1) {
      const temp = {name: "用户管理", class: "item-normal"};
      this.menus.push(temp);
    }
  },
  methods: {
    search() {
      if (this.search_input != "") {

        this.$axios.get('/search?s=' + this.search_input).then((res) => {
          const temp_list = res.data.status.split("|")
          this.songNameTemp = temp_list[0]
          this.songId = temp_list[2]
          this.songname = temp_list[0]
          this.songart = temp_list[1]
          const temp = {
            title: temp_list[0],
            artist: temp_list[1],
            src: temp_list[3],
            pic: temp_list[4]
          }
          this.musicList.push(temp)

          const url = '/searchHistoryInsert?songId=' + temp_list[2] + '&songname=' + temp_list[0] + '&songart=' + temp_list[1] + '&uid=' + window.sessionStorage.getItem("uid")
          this.$axios.get(url).then(res => {
            if (res.data.code === 200) {
              console.log(res.data.status);
            } else {
              console.log(res.data.error);
            }
          })

          this.$axios.get('/getCommentsOnline?s=' + this.songNameTemp).then(res1 => {
            if (res1.data.code === 200) {
              console.log(res1.data.status);
            } else {
              console.log(res1.data.error);
            }
          })
        })
      } else {
        alert("请输入搜索内容！")
      }
    },

    didClickMenus() {
      this.isShow = true;
    },
    didSelectItem(index) {
      console.log(index)
      if (index === 0) {
        let routerUrl = this.$router.resolve({
          path: './setting'
        })
        window.open(routerUrl.href, '_blank')
      }
      if (index === 1) {
        let routerUrl = this.$router.resolve({
          path: './history'
        })
        window.open(routerUrl.href, '_blank')
      }
      if (index === 2) {
        let routerUrl = this.$router.resolve({
          path: './lovelist'
        })
        window.open(routerUrl.href, '_blank')
      }
      if (index === 3) {
        let routerUrl = this.$router.resolve({
          path: './mycomments'
        })
        window.open(routerUrl.href, '_blank')
      }
      if (index === 4) {
        sessionStorage.clear();
        this.$router.push('/login&register');
      }
      if (index === 5) {
        let routerUrl = this.$router.resolve({
          path: './manage'
        })
        window.open(routerUrl.href, '_blank')
      }
    },
    login() {
      if (sessionStorage.getItem("uid") != null) {
        console.log("上杉绘梨衣");
      } else {
        alert("小怪兽music提醒你：尚未登录，正在跳转...");
        this.$router.push('/login&register')
      }
    },
    loveInsert() {
      if (this.search_input != "") {
        const songId = this.songId
        console.log(songId)
        const url = '/loveInsert?songId=' + songId + '&uid=' + window.sessionStorage.getItem("uid")
        this.$axios.get(url).then(res => {
          if (res.data.code === 200) {
            console.log(res.data)
            alert(res.data.status);
          } else {
            alert(res.data.error);
          }
        })
      } else {
        alert("操作不能为空！")
      }
    },
    getCommentsAll() {
      window.sessionStorage.setItem('songId', this.songId)
      window.sessionStorage.setItem('songname', this.songname)
      window.sessionStorage.setItem('songart', this.songart)
      let routerUrl = this.$router.resolve({
        path: './comments'
      })
      window.open(routerUrl.href, '_blank')
    },
    writeComment() {
      const url = '/writeComment?songId=' + this.songId + '&uid=' + window.sessionStorage.getItem('uid') + '&id=' + window.sessionStorage.getItem('username') + '&comment=' + this.comment_input;
      this.$axios.get(url).then(res => {
        if (res.data.code === 200) {
          alert(res.data.status);
        } else {
          alert(res.data.error);
        }
      })
    }
  }
}
</script>

<style scoped lang="less">
#home {
  height: 100%;
  padding: 0;
  margin: 0;
  background-image: url("http://pic.yupoo.com/2020ljhothers/d0b6395c/7d907116.jpg");
  background-size: cover;
}

#content {
  width: 55%;
  margin: 0 auto;
}

.tittlebox {
  padding-top: 3px;
  text-align: center;
}

.tittle {
  font-family: 'Courier New', Courier, monospace;
  font-size: 34px;
  color: rgb(218, 185, 166);
}

.input {
  background-color: transparent;
  margin: 0 auto;
  width: 55%;
}

.input input {
  background-color: transparent;
  font-size: 24px;
  font-family: 'Courier New', Courier, monospace;
  outline: none;
  width: 100%;
  border: none;
  border-bottom: #8d8d8d 1px solid;
  margin: 4.6rem 0;
}

#m-header {
  background-color: white;
  display: flex;
  padding: 1.08rem 1.6rem;

  .right {
    flex: 1;
    text-align: right;
    position: relative;
  }

  .none {
    display: none;
  }

  .active {
    position: absolute;
    background-color: rgb(218, 185, 166);
    width: 5.68rem;
    height: auto;
    right: 0;
    top: 0;
  }

  .item-top {
    height: 0.2rem;
    list-style-type: none;
  }

  .item-normal, .item-last {
    font-family: 'Courier New', Courier, monospace;
    font-weight: 400;
    color: white;
    font-size: 18px;
    padding-left: 0.78rem;
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
    text-align: left;
    position: relative;
    list-style-type: none;
    cursor: pointer;
  }

  .item-normal::after {
    content: "";
    width: calc(~"5.68rem - 0.08rem * 2");
    height: 1px;
    background-color: whitesmoke;
    left: 0.02rem;
    position: absolute;
    bottom: 0;
  }
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

.bbutton {
  width: 20%;
  height: 40px;
  border-radius: 24px;
  border: none;
  outline: none;
  background-color: #DAB9A680;
  color: #fff;
  font-size: 0.9em;
  cursor: pointer;
}

.bbutton1 {
  width: 20%;
  height: 40px;
  border-radius: 24px;
  border: none;
  outline: none;
  background-color: #70D9F380;
  color: #fff;
  font-size: 0.9em;
  cursor: pointer;
}

.bbutton2 {
  width: 20%;
  height: 40px;
  border-radius: 24px;
  border: none;
  outline: none;
  background-color: #71E66780;
  color: #fff;
  font-size: 0.9em;
  cursor: pointer;
}

.button-box input {
  width: 28%;
  height: 30px;
  border: none;
  outline: none;
  padding-left: 2px;
  border-bottom: #302c2c 1px solid;
  background-color: transparent;
  font-size: 24px;
  font-family: 'Courier New', Courier, monospace;
}
</style>
