<template>
  <el-container>
    <el-main>
      <div class="back">
        <a @click="goback"><img src="../assets/images/0/0_03.png" />返回首页</a>
      </div>
      <div class="loginBox">
        <p>用户登录</p>
        <div class="inputBox">
          <el-input placeholder="输入用户名" class="username"></el-input>
          <el-input placeholder="输入密码" class="password"></el-input>
        </div>
        <div class="operateBox">
          <p>忘记密码?</p>
          <el-button>登录</el-button>
          <a href="#"><p>注册</p></a>
        </div>
      </div>
    </el-main>
    <el-footer>
      <p>©2016 浙江杭州西湖龙井有限公司 &nbsp;&nbsp;&nbsp;沪ICP备123456789号</p>
      <p>
        <a href="#">人才招聘</a> | <a href="https://weibo.com/">新浪微博</a>
      </p>
    </el-footer>
  </el-container>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    goback() {
      this.$router.go(-1);
    }
  }
};
</script>

<style lang="less" scoped>
.el-container {
  height: 100%;
  .el-main {
    letter-spacing: 2px;
    background: url("../assets/images/0/0_01_01.jpg") no-repeat;
    background-size: 100% 100%;
    height: 80%;
    .back {
      & :hover {
        cursor: pointer;
      }
      a {
        display: inline-flex;
        img {
          padding-top: 2px;
        }
      }
    }
    .loginBox {
      position: absolute;
      box-sizing: border-box;
      width: 25%;
      height: 60%;
      right: 10%;
      float: right;
      //   background-color: wheat;
      border-left: 5px solid black;
      border-right: 5px solid black;
      padding: 50px 20px;
      p {
        text-align: center;
        font: normal 500 28px/34px arial, sans-serif;
      }
      .inputBox {
        margin: 30px 0;
        /deep/ .el-input__inner {
          border: none;
          border-radius: 0px;
          border-bottom: 1px solid black;
          width: 90%;
          margin: 10px;
          padding-left: 30px;
        }
        .password {
          /deep/ .el-input__inner {
            background: url("../assets/images/0/0_10.png") no-repeat;
            background-position: 0px 8px;
          }
        }
        .username {
          /deep/ .el-input__inner {
            background: url("../assets/images/0/0_07.png") no-repeat;
            background-position: 0px 8px;
          }
        }
      }
      .operateBox {
        p {
          text-align: right;
          font: normal 500 14px/30px arial, sans-serif;
          color: #717173;
          margin: 10px 0;
        }
        .el-button {
          width: 100%;
          height: 50px;
          border: 1px solid black;
          background: transparent;
          font: normal 500 24px/24px arial, sans-serif;
        }
      }
    }
  }
  .el-footer {
    display: flex;
    justify-content: space-around;
    background-color: black;
    p {
      display: block;
      padding-top: 30px;
      margin-bottom: 10px;
      color: #7d7d7d;
      font-size: 12px;
      a {
        color: #7d7d7d;
        margin: 10px;
      }
    }
  }
}
</style>
