<template>
  <el-footer>
    <p>
      ©2016 浙江杭州西湖龙井有限公司 &nbsp;&nbsp;&nbsp;沪ICP备123456789号
    </p>
    <p><a href="#">人才招聘</a> | <a href="https://weibo.com/">新浪微博</a></p>
  </el-footer>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
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
</style>
