<!--
 * @Author: Ljh
 * @Date: 2020-11-23 18:57:55
 * @LastEditTime: 2020-11-25 00:45:03
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \website\music\src\view\Setting.vue
-->


<template>
  <div class="setting">
    <div class="contain">
      <div class="big-box">
        <div class="big-contain">
          <div class="btitle">账号信息</div>
          <div class="bform">
            <div><strong class="label">账号: </strong><input type="usernane" placeholder="用户名" v-model="form.username">
            </div>
            <div><strong class="label">密码: </strong><input type="password" placeholder="密码" v-model="form.userpwd">
            </div>
          </div>
          <button class="button" @click="alter">修改信息</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Setting',
  data() {
    return {
      form: {
        username: window.sessionStorage.getItem("username"),
        userpwd: window.sessionStorage.getItem("userpwd")
      },
      admin: window.sessionStorage.getItem("admin"),
      uid: window.sessionStorage.getItem("uid")
    }
  },
  methods: {
    alter() {
      const id = this.form.username
      const pwd = this.form.userpwd
      const uid = this.uid
      if (id !== "" && pwd !== "") {
        const url = '/alter?id=' + id + '&pwd=' + pwd + '&uid=' + uid
        this.$axios.get(url).then(res => {
          if (res.data.code === 200) {
            alert(res.data.status);
            window.sessionStorage.setItem('username', id)
            window.sessionStorage.setItem('userpwd', pwd)
          } else {
            alert(res.data.error);
          }
        })
      } else {
        alert("账号信息不能为空！");
      }
    }
  }
}
</script>

<style scoped lang="less">
.setting {
  width: 100vw;
  height: 100vh;
  box-sizing: border-box;
  background-image: url("http://pic.yupoo.com/2020ljhothers/b70d71e4/7f1820f8.jpg");
  background-size: cover;
}

.contain {
  background-image: url("http://pic.yupoo.com/2020ljhothers/b70d71e4/7f1820f8.jpg");
  background-size: cover;
  width: 50%;
  height: 44%;
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #fff;
  border-radius: 20px;
  box-shadow: 0 0 3px #f0f0f0,
  0 0 6px #f0f0f0;
}


.big-box {
  width: 80%;
  height: 100%;
  position: absolute;
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
  color: rgb(218, 185, 166);
}

.bform {
  width: 100%;
  height: 40%;
  padding: 2em 0;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
}

.bform input {
  width: 60%;
  height: 30px;
  border: none;
  outline: none;
  padding-left: 2px;
  border-bottom: #8d8d8d 1px solid;
  background-color: transparent;
  font-size: 24px;
  font-family: 'Courier New', Courier, monospace;
}

.label {
  font-size: 24px;
  font-family: 'Courier New', Courier, monospace;
  padding-right: 2px;
  padding-left: 4px;
}

.button {
  width: 40%;
  height: 40px;
  border-radius: 24px;
  border: none;
  outline: none;
  background-color: #dd552280;
  color: #ffffff;
  font-size: 0.9em;
  cursor: pointer;
}

</style>
