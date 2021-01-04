<!--
 * @Author: Ljh
 * @Date: 2020-06-25 03:02:50
 * @LastEditTime: 2020-06-25 03:27:43
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \musicweb\music\src\view\manage.vue
-->


<template>
  <div class="manage">
    <div class="contain">
      <div class="big-box">
        <div class="big-contain">
          <div class="btitle">注册用户管理</div>
          <div class="bform">
            <div id="m-header">
              <div class="center">
                <!--                    <li v-for="(item, index) in userList"
                                    :class="item.class">
                                    {{index}}) 用户名称：{{item.id}}
                                    </li>-->
                <table>
                  <tr>
                    <th>用户名称</th>
                  </tr>
                  <tr v-for="(item, index) in userList" :class="item.class">
                    <td v-for="column in userListColumn">{{ item[column] }}</td>
                    <td v-if="isShowList">
                      <button class="bbutton" v-bind:key="item.id" @click="setAdmin(item.id)">授予管理员权限</button>
                    </td>
                    <td v-if="isShowList">
                      <button class="bbutton" v-bind:key="item.id" @click="deleteUser(item.id)">删除该用户</button>
                    </td>
                  </tr>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!--          <div class="button-box">
                  <input placeholder="用户名称前序号" type="text"  v-model="search_input_ahead"><button class="bbutton" @click="setAdmin">授予管理员权限</button>
                  <input placeholder="用户名称前序号" type="text"  v-model="search_input_behind"><button class="bbutton" @click="deleteUser">删除该用户</button>
                </div>-->
    </div>
  </div>
</template>

<script>
export default {
  name: 'manage',
  data() {
    return {
      isShow: true,
      search_input_ahead: '',
      search_input_behind: '',
      username: window.sessionStorage.getItem("username"),
      userpwd: window.sessionStorage.getItem("userpwd"),
      admin: window.sessionStorage.getItem("admin"),
      uid: window.sessionStorage.getItem("uid"),
      userListColumn: ['id'],
      userList: [],
      isShowList: false
    }
  },
  methods: {
    check() {
      this.$axios.get('/check').then(res => {
        if (res.data.code === 200) {
          console.log(res.data.status)
          for (let i = 0; i < res.data.data.length; i++) {
            this.userList.push(res.data.data[i])
          }
          console.log(this.userList)
          this.isShowList = this.userList.length !== 0
        } else {
          console.log(res.data.error)
        }
      })
    },
    setAdmin(id) {
      console.log(id)
      const url = '/setAdmin?id=' + id
      this.$axios.get(url).then(res => {
        if (res.data.code === 200) {
          alert(res.data.status);
          this.$router.go(0)
        } else {
          alert(res.data.error);
        }
      })
    },
    deleteUser(id) {
      console.log(id)
      const url = '/deleteUser?id=' + id
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
    this.check();
  }
}
</script>

<style scoped lang="less">
.manage {
  width: 100vw;
  height: 100vh;
  box-sizing: border-box;
  background-image: url("http://pic.yupoo.com/2020ljhothers/b70d71e4/7f1820f8.jpg");
  background-size: cover;
}

.contain {
  width: 55%;
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
  width: 21%;
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
