<template>
  <el-container>
    <el-header>
      Header
    </el-header>
    <el-main>
      <router-view></router-view>
    </el-main>
    <el-footer>
      Footer
    </el-footer>
  </el-container>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.el-container {
  height: 100%;
  .el-header {
    background-color: aliceblue;
    color: #333;
    text-align: center;
    line-height: 60px;
    z-index: 1;
  }
  .el-main {
    background-color: #e9eef3;
    color: #333;
    text-align: center;
    line-height: 160px;
    margin-top: -60px;
  }
  .el-footer {
    background-color: #b3c0d1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }
}
</style>
