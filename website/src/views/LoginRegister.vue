<template>
  <div class="loginRegister">
    <div class="contain">
      <div class="big-box" :class="{active:isLogin}">
        <div class="big-contain" v-if="isLogin">
          <div class="btitle">账户登录</div>
          <div class="bform">
            <input type="usernane" placeholder="用户名" v-model="form.username">
            <input type="password" placeholder="密码" v-model="form.userpwd">
          </div>
          <button class="bbutton" @click="login">登录</button>
        </div>

        <div class="big-contain" v-else>
          <div class="btitle">创建账户</div>
          <div class="bform">
            <input type="text" placeholder="用户名" v-model="form.username">
            <input type="password" placeholder="密码" v-model="form.userpwd">
            <input type="password" placeholder="确认密码" v-model="form.useragain">
          </div>
          <button class="bbutton" @click="register">注册</button>
        </div>
      </div>
      <div class="small-box" :class="{active:isLogin}">
        <div class="small-contain" v-if="isLogin">
          <div class="stitle">小怪兽music</div>
          <p class="scontent">"我们都是小怪兽，总有一天会被正义的奥特曼杀死。"		————  上杉绘梨衣</p>
          <button class="sbutton" @click="changeType">注册</button>
        </div>
        <div class="small-contain" v-else>
          <div class="stitle">小怪兽music</div>
          <p class="scontent">"以前世界不是这样的，没有那么温柔过。"		——上杉绘梨衣</p>
          <button class="sbutton" @click="changeType">登录</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default{
  name:'LoginRegister',
  data(){
    return {
      isLogin:true,
      form:{
        username:'',
        useragain:'',
        userpwd:''
      }
    }
  },
  methods:{
    changeType() {
      this.isLogin = !this.isLogin
      this.form.username = ''
      this.form.useragain = ''
      this.form.userpwd = ''
    },
    login() {
      const self = this;
      if (self.form.username !== "" && self.form.userpwd !== "") {
        this.$axios.get('/login?id=' + self.form.username + '&pwd=' + self.form.userpwd).then( res => {
          if (res.data.code === 200) {
            window.sessionStorage.setItem('username', self.form.username)
            window.sessionStorage.setItem('userpwd', self.form.userpwd)
            window.sessionStorage.setItem('admin', res.data.data[0].admin)
            window.sessionStorage.setItem('uid', res.data.data[0].uid)
            alert("登录成功，正在转跳...")
            this.$router.push('/home')
          } else {
            alert(res.data.error);
          }
        }).catch( err => {
          console.log(err);
        })
      } else{
        alert("填写不能为空！");
      }
    },
    register(){
      const self = this;
      if (self.form.useragain === self.form.userpwd) {
        if (self.form.username !== "" && self.form.userpwd !== "") {
          this.$axios.get('/register?id=' + self.form.username + '&pwd=' + self.form.userpwd).then(res => {
            if (res.data.code === 200) {
              alert(res.data.status);
              this.isLogin = !this.isLogin
            } else {
              alert(res.data.error);
            }
          }).catch( err => {
            console.log(err);
          })
        } else {
          alert("填写不能为空！")
        }
      } else {
        alert("两次密码输入不一致")
      }

    }
  }
}
</script>

<style scoped="scoped">
.loginRegister{
  width: 100vw;
  height: 100vh;
  box-sizing: border-box;
  background-image: url("http://pic.yupoo.com/2020ljhothers/2de24479/cec56fcc.jpg");
  background-size: cover;
}
.contain{
  background-image: url("http://pic.yupoo.com/2020ljhothers/2de24479/cec56fcc.jpg");
  background-size: cover;
  width: 60%;
  height: 60%;
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  background-color: #fff;
  border-radius: 20px;
  box-shadow: 0 0 3px #f0f0f0,
  0 0 6px #f0f0f0;
}
.big-box{
  width: 70%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 30%;
  transform: translateX(0%);
  transition: all 1s;
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
  color: rgb(218,185,166);
}
.bform{
  width: 100%;
  height: 40%;
  padding: 2em 0;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
}
.bform .errTips{
  display: block;
  width: 50%;
  text-align: left;
  color: red;
  font-size: 0.7em;
  margin-left: 1em;
}
.bform input{
  width: 50%;
  height: 30px;
  border: none;
  outline: none;
  border-radius: 10px;
  padding-left: 2em;
  background-color: #f0f0f0;
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
.small-box{
  width: 30%;
  height: 100%;
  background: linear-gradient(135deg,rgb(218,185,166),rgb(230, 194, 174));
  position: absolute;
  top: 0;
  left: 0;
  transform: translateX(0%);
  transition: all 1s;
  border-top-left-radius: inherit;
  border-bottom-left-radius: inherit;
}
.small-contain{
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.stitle{
  font-size: 1.5em;
  font-weight: bold;
  color: #fff;
}
.scontent{
  font-size: 0.8em;
  color: #fff;
  text-align: center;
  padding: 2em 4em;
  line-height: 1.7em;
}
.sbutton{
  width: 60%;
  height: 40px;
  border-radius: 24px;
  border: 1px solid #fff;
  outline: none;
  background-color: transparent;
  color: #fff;
  font-size: 0.9em;
  cursor: pointer;
}

.big-box.active{
  left: 0;
  transition: all 0.5s;
}
.small-box.active{
  left: 100%;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  border-top-right-radius: inherit;
  border-bottom-right-radius: inherit;
  transform: translateX(-100%);
  transition: all 1s;
}
</style>
