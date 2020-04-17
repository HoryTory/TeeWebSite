<template>
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
      <el-menu-item index="/login" style="margin-left:100px">
        <template slot="title">
          <img src="../assets/images/1/1_03.jpg" style="height:25px" />
        </template>
      </el-menu-item>
    </el-menu>
  </el-header>
</template>

<script>
export default {
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    }
  }
};
</script>

<style lang="less" scoped>
.el-header {
  z-index: 1;
  color: #333;
  line-height: 80px;
  .el-menu {
    display: flex;
    justify-content: space-around;
    background-color: transparent;
    padding-left: 10%;
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
</style>
