<!--
 * @Author: Ljh
 * @Date: 2020-06-24 20:37:40
 * @LastEditTime: 2020-06-25 01:49:55
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \musicweb\music\src\view\history.vue
-->


<template>
  <div class="history">
    <div class="contain">
      <div class="big-box">
        <div class="big-contain">
          <div class="btitle">听歌历史</div>
          <div class="bform">
            <div id="m-header">
              <div class="center">
                <!--                    <li v-for="(item, index) in historyList"-->
                <!--                    :class="item.class">-->
                <!--                    {{index}}) 歌曲id：{{item.songId}}     歌曲名称：{{item.songname}}        歌曲作者：{{item.songart}}       听歌时间：{{item.date}}-->
                <!--                    </li>-->
                <table>
                  <tr>
                    <th>歌曲名称</th>
                    <th>歌曲作者</th>
                  </tr>
                  <tr v-for="(item, index) in historyList" :class="item.class">
                    <td v-for="column in historyListColumn">{{ item[column] }}</td>
                    <td v-if="isShowList">
                      <button class="bbutton" v-bind:key="item.songId" @click="loveInsert(item.songId)">添加到喜欢列表</button>
                    </td>
                    <td v-if="isShowList">
                      <button class="bbutton" v-bind:key="item.songId" @click="deleteHistory(item.songId)">删除该歌曲所有历史信息
                      </button>
                    </td>
                  </tr>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!--          <div class="button-box">-->
      <!--            <input placeholder="歌曲前序号" type="text"  v-model="search_input_ahead"><button class="bbutton" @click="loveInsert">添加到喜欢列表</button>-->
      <!--            <input placeholder="歌曲前序号" type="text"  v-model="search_input_behind"><button class="bbutton" @click="deleteHistory">删除该歌曲所有历史信息</button>-->
      <!--          </div>-->
    </div>
  </div>
</template>

<script>
export default {
  name: 'history',
  data() {
    return {
      isShow: true,
      search_input_ahead: '',
      search_input_behind: '',
      username: window.sessionStorage.getItem("username"),
      userpwd: window.sessionStorage.getItem("userpwd"),
      admin: window.sessionStorage.getItem("admin"),
      uid: window.sessionStorage.getItem("uid"),
      historyListColumn: ['songname', 'songart'],
      historyList: [],
      isShowList: false
    }
  },
  methods: {
    getSearchHistory() {
      const url = '/getSearchHistory?uid=' + window.sessionStorage.getItem("uid");
      this.$axios.get(url).then(res => {
        if (res.data.code === 200) {
          console.log(res.data.status)
          for (let i = 0; i < res.data.data.length; i++) {
            this.historyList.push(res.data.data[i])
          }
          console.log(this.historyList)
          this.isShowList = this.historyList.length !== 0;
        } else {
          console.log(res.data.error)
        }
      })
    },
    loveInsert(songId) {
      console.log(songId)
      const uid = this.uid
      const url = '/loveInsert?songId=' + songId + '&uid=' + uid
      this.$axios.get(url).then(res => {
        if (res.data.code === 200) {
          alert(res.data.status);
        } else {
          alert(res.data.error);
        }
      })
    },
    deleteHistory(songId) {
      console.log(songId)
      const uid = this.uid
      const url = '/deleteHistory?songId=' + songId + '&uid=' + uid
      this.$axios.get(url).then(res => {
        if (res.data.code === 200) {
          alert(res.data.status);
          this.$router.go(0)
        } else {
          alert(res.data.error);
        }
      })
    }
  },
  mounted() {
    this.getSearchHistory();
  }
}
</script>

<style scoped lang="less">
.history {
  width: 100vw;
  height: 100vh;
  box-sizing: border-box;
  background-image: url("http://pic.yupoo.com/2020ljhothers/b70d71e4/7f1820f8.jpg");
  background-size: cover;
}

.contain {
  width: 85%;
  height: auto;
  background-color: #ffffff50;
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 20px;
  box-shadow: 0 0 3px #f0f0f0,
  0 0 6px #f0f0f0;
}


.big-box {
  width: 100%;
  height: 100%;
}

.big-contain {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.btitle {
  font-size: 1.5em;
  font-weight: bold;
  color: rgb(8, 33, 49);
}

.bform {
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
  background-color: rgb(218, 185, 166);
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

.bbutton {
  padding: 0 20px;
  height: 30px;
  border-radius: 24px;
  border: none;
  outline: none;
  background-color: rgb(218, 185, 166);
  color: #fff;
  font-size: 0.9em;
  cursor: pointer;
}

.button-box input {
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

th, td {
  text-align: center;
  padding: 5px 15px;
}
</style>
