<template>
  <el-container>
    <el-header style="height:86px">
      <el-menu
        :default-active="this.$route.path"
        router
        class="el-menu-demo"
        mode="horizontal"
        @select="handleSelect"
      >
        <el-menu-item index="/home">首页</el-menu-item>
        <el-menu-item index="/product">产品</el-menu-item>
        <el-menu-item index="/news">新闻</el-menu-item>
        <el-menu-item index="/culture">茶文化</el-menu-item>
        <el-menu-item index="/activity">茶活动</el-menu-item>
        <el-menu-item index="/aboutus">关于我们</el-menu-item>
        <el-menu-item index="/login">
          <template slot="title">
            <img src="../assets/images/1/1_03.jpg" style="height:18px" />
          </template>
        </el-menu-item>
      </el-menu>
    </el-header>
    <el-main>
      <router-view></router-view>
      <el-footer>
        <p>
          ©2016 浙江杭州西湖龙井有限公司 &nbsp;&nbsp;&nbsp;沪ICP备123456789号
        </p>
        <p>
          <a href="#">人才招聘</a> | <a href="https://weibo.com/">新浪微博</a>
        </p>
      </el-footer>
    </el-main>
  </el-container>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    }
  }
};
</script>

<style lang="less" scoped>
.el-container {
  height: 100%;
  .el-header {
    z-index: 1;
    color: #333;
    line-height: 80px;
    .el-menu {
      display: flex;
      justify-content: space-around;
      background-color: transparent;
      padding-left: 30%;
      &.el-menu--horizontal {
        border: none;
      }
      li {
        font-size: 18px;
      }
    }
    .el-menu--horizontal > .el-menu-item {
      margin: 0 20px;
      height: 86px;
      line-height: 86px;
      color: black;
      &:hover {
        background-color: transparent;
      }
      &.is-active {
        border-bottom: 4px solid black;
        background-color: transparent;
      }
    }
  }
  .el-main {
    padding: 0;
    position: absolute;
    width: 100%;
    padding-top: 86px;
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
