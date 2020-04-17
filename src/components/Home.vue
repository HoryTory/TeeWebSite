<template>
  <div>
    <Nav></Nav>
    <el-main>
      <div class="banner">
        <div class="pics">
          <el-image
            style="width:240px;height:295px"
            fit="fill"
            :src="picLst[0]"
          ></el-image>
          <el-image
            style="width:96px;height:144px"
            fit="fill"
            :src="picLst[1]"
          ></el-image>
          <el-image
            style="width:220px;height:295px"
            fit="fill"
            :src="picLst[2]"
          ></el-image>
        </div>
        <div>
          <el-image
            style="width:96%;height:60px;margin-left:2%"
            fit="fill"
            :src="picLst[3]"
          ></el-image>
        </div>
        <el-image class="font" fit="fill" :src="picLst[4]"></el-image>
      </div>
    </el-main>
    <Footer></Footer>
  </div>
</template>

<script>
import Nav from "../component/nav";
import Footer from "../component/footer";
export default {
  data() {
    return {
      picLst: [
        require("../assets/images/1/1_07.png"),
        require("../assets/images/1/1_12.png"),
        require("../assets/images/1/1_09.png"),
        require("../assets/images/1/1_17.png"),
        require("../assets/images/1/1_21.png")
      ]
    };
  },
  components: {
    Nav,
    Footer
  }
};
</script>

<style lang="less" scoped>
.el-main {
  padding: 0;
  width: 100%;
  .banner {
    position: relative;
    height: 435px;
    margin: 80px 25%;
    border-bottom: 2px solid #a4a4a4;
    .pics {
      display: flex;
      width: 100%;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 40px;
    }
    .font {
      background-color: white;
      position: absolute;
      right: 37%;
      bottom: -30px;
    }
  }
}
</style>
