<template>
  <div>
    <div class="banner" @mouseover="mouseOver" @mouseleave="mouseLeave">
      <img src="../assets/images/3/3_04.png" v-if="isShown" />
    </div>
    <div class="details">
      <div class="top">
        <p>{{ details[0].title }}</p>
        <p>{{ details[0].time }}</p>
      </div>
      <div class="main">
        <el-image
          style="width:465px;height:250px"
          fit="fill"
          :src="details[0].imgLeftUrl"
        ></el-image>
        <el-image
          style="width:400px;height:250px"
          fit="fill"
          :src="details[0].imgRightUrl"
        ></el-image>
      </div>
      <p class="content">{{ details[0].content }}</p>
      <div class="backBox">
        <div class="box" @click="goback">
          <img src="../assets/images/4-1/4-1_11.png" />
          <p>返回列表</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isShown: false,
      details: [
        {
          title: "文章标题文章标题文章标题文章标题",
          time: "2018/03/03",
          imgLeftUrl: require("../assets/images/4-1/4-1_04.png"),
          imgRightUrl: require("../assets/images/4-1/4-1_06.png"),
          content:
            "文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章\
            内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容\
            文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容\
            文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容"
        }
      ]
    };
  },
  methods: {
    mouseOver() {
      this.isShown = !this.isShown;
    },
    mouseLeave() {
      this.isShown = !this.isShown;
    },
    goback() {
      this.$router.go(-1);
    }
  }
};
</script>

<style lang="less" scoped>
.banner {
  position: relative;
  margin-top: -84px;
  height: 415px;
  background: url("../assets/images/4-1/4-1_01.png") no-repeat;
  background-size: 100% 100%;
  img {
    position: absolute;
    bottom: 135px;
    right: 50%;
    height: 100px;
    opacity: 0.8;
  }
}
.details {
  margin: 4% 16.5%;
  .top {
    text-align: center;
    letter-spacing: 2px;
    p {
      &:nth-child(1) {
        font-size: 18px;
        font-weight: bold;
      }
      &:nth-child(2) {
        margin: 25px 0;
        color: grey;
      }
    }
  }
  .main {
    display: flex;
    justify-content: space-between;
    margin: 0px 40px 40px 30px;
  }
  .content {
    display: block;
    text-align: justify;
    font-weight: lighter;
    margin-bottom: 50px;
    color: grey;
    font-size: 18px;
  }
}
.backBox {
  display: flex;
  justify-content: flex-end;
  margin-right: 15%;
  .box {
    display: inline-flex;
    &:hover {
      cursor: pointer;
    }
    p {
      color: grey;
      margin-left: 10px;
    }
  }
}
</style>
