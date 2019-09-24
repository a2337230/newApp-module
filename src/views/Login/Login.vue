<template>
  <div class="login">
    <!-- logo区域 -->
    <div class="login-logo">
      <div class="logo">
        <img :src="logo" alt="杏林学堂">
      </div>
    </div>
    <!-- 输入框组 -->
    <div class="input-group">
      <div class="tel input-item">
        <input type="text" v-model="formData.tel" @input="isInput">
        <div class="input-current"></div>
        <p class="input-text" v-show="formData.tel === ''">用户名</p>
      </div>
      <div class="tel input-item">
        <input type="text" v-model="formData.psd" @input="isInput">
        <div class="input-current"></div>
        <p class="input-text" v-show="formData.psd === ''">密码</p>
      </div>
    </div>
    <!-- 按钮区域 -->
    <div class="btn-group">
      <div class="submit-btn-box">
        <button class="submit-btn" :class="{btnCurrent: btnClick}">下一步</button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'login',
  data () {
    return {
      // logo
      logo: require('./../../common/logo.png'),
      // 输入信息
      formData: {
        tel: '',
        psd: ''
      },
      // 按钮控制
      btnClick: false
    }
  },
  methods: {
    isInput () {
      if (this.formData.tel !== '' && this.formData.psd !== '') {
        this.btnClick = true
      } else {
        this.btnClick = false
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.login {
  .login-logo {
    width: 100vw;
    height: 3.14rem;
    display: flex;
    justify-content: center;
    align-items: center;
    .logo {
      width: 2rem;
      height: 1.37rem;
      img {
        width: 100%;
      }
    }
  }
  .input-group {
    padding: 0 .75rem;
    .input-item {
      width: 100%;
      // background-color: red;
      padding-bottom: .3rem;
      border-bottom: 1px solid #D7D7D7;
      position: relative;
      margin-bottom: .5rem;
      .input-current {
        position: absolute;
        bottom: -1px;
        width: 0;
        height: 1px;
        background-color: blue;
        transition: .4s;
        // animation: current 0.2s;
      }
      .input-text {
        font-size: .28rem;
        color: #cdcdcd;
        transition: .4s;
        position: absolute;
        top: 0;
        left: 0;
      }
      input {
        position: relative;
        z-index: 1;
        &:focus + .input-current {
          width: calc(100vw - 1.42rem);
        }
        &:focus ~ .input-text {
          color: blue;
          font-size: .12rem;
          top: -.28rem;
        }
      }
      input {
        font-size: .28rem;
      }
    }
  }
  .btn-group {
    padding: 0 .7rem;
    .submit-btn-box {
      position: relative;
      overflow: hidden;
      .submit-btn {
        width: 100%;
        text-align: center;
        background: rgb(204,204,204);
        height: .88rem;
        border-radius: .44rem;
        color: #fff;
        font-size: .3rem;
        transition: .5s;
        overflow: hidden;
      }
      .btnCurrent {
        background: rgb(47,84,237);
        &:after {
          content: "";
          display: block;
          position: absolute;
          width: 100%;
          height: 100%;
          top: 0;
          left: 0;
          pointer-events: none;
          background-image: radial-gradient(circle, #ccc 10%, transparent 10.01%);
          background-repeat: no-repeat;
          background-position: 50%;
          transform: scale(10, 10);
          opacity: 0;
          transition: transform .3s, opacity .5s;
        }
        &:active:after {
          transform: scale(0, 0);
          opacity: .3;
          transition: 0s;
        }
      }
    }
  }
}
</style>