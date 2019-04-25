<template>
  <div class="login">
    <div class="login-name">
      <span>username：</span>
      <input type="text" placeholder="name" v-model="parames.u_name">
    </div>
    <div class="login-password">
      <span>userpassword：</span>
      <input type="password" placeholder="password" v-model="parames.u_password">
    </div>
    <div class="login-btn">
      <input type="button" value="登录" @click="login">
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      parames: {
        u_name: '',
        u_password: ''
      }
    }
  },
  methods: {
    async login () {
      let res = await this.$axios.post('/login', this.parames);
      console.log(res)
    }
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/css/mixin.scss";
.login{
  width: 80%;
  height: 40%;
  border: 1px solid #eee;
  margin: 0 auto;
  position: absolute;
  top: 50%;
  left: 50%;
  text-align: center;
  transform: translate(-50%, -50%);
  padding-top: 10%;
  span{
    display: inline-block;
    width: 100px;
    text-align: right;
    margin-right: 5px;
  }
  .login-name{
    height: 32px;
    line-height: 32px;
  }
  .login-password{
    margin-top: 30px;
  }
  input{
    padding: 5px;
    height: 32px;
    line-height: 32px;
    border: 1px solid #eee;
  }
  .login-btn input{
    width: pxToRem(100px);
    margin-top: 20%; 
    height: pxToRem(100px);
    line-height: pxToRem(100px);
    font-size: pxToRem(28px);
  }
  .login-btn input:active{
    background: #666;
  }
}
</style>

