<template>
  <div>
    <div class="banner" @mouseover="mouseOver" @mouseleave="mouseLeave">
      <img src="../assets/images/3/3_04.png" v-if="isShown" />
    </div>
    <div class="introduce">
      <div class="top">
        <p>公司介绍</p>
        <span>COMPANY INTRODUCTION</span>
      </div>
      <div class="maintext">
        <el-image
          style="width: 250px; height: 240px"
          :src="require('../assets/images/6/6_04.png')"
          fit="fill"
        ></el-image>
        <p>{{ cotent }}</p>
      </div>
      <el-carousel type="card" height="125px" arrow="always">
        <el-carousel-item v-for="item in imagesbox" :key="item.id">
          <img :src="item.idView" class="image" />
        </el-carousel-item>
      </el-carousel>
    </div>
    <div class="contact">
      <div class="top">
        <p>联系我们</p>
        <span>CONTACT US</span>
      </div>
      <el-image
        style="width: 100%; height: 250px"
        :src="require('../assets/images/6/map.png')"
        fit="fill"
      ></el-image>
      <div class="mask">
        <div class="contactmethods">
          <p>电话: 0571-2121546541</p>
          <p>地址: 杭州市西湖区某某地址</p>
          <p>邮箱: 12054545@163.com</p>
        </div>
        <div class="erweima">
          <li v-for="(item, index) in pics" :key="index">
            <el-image
              style="width: 120px; height: 120px"
              :src="item.imgUrl"
              fit="fill"
            ></el-image>
            <p>{{ item.name }}</p>
          </li>
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
      cotent:
        "这里介绍公司的信息，主营业务等这里介绍公司的信息，主营业务等这里介绍公司的信息，主营业务等这里介绍公司的信息，主营业务等这里介绍公司的信息，主营业务等这里介绍公司的信息，主营业务等这里介绍公司的信息，主营业务等\
        这里介绍公司的信息，主营业务等这里介绍公司的信息，主营业务等这里介绍公司的信息，主营业务等这里介绍公司的信息，主营业务等这里介绍公司的信息，主营业务等这里介绍公司的信息，主营业务等这里介绍公司的信息，主营业务等\
        这里介绍公司的信息，主营业务等这里介绍公司的信息，主营业务等这里介绍公司的信息，主营业务等这里介绍公司的信息，主营业务等这里介绍公司的信息，主营业务等这里介绍公司的信息，主营业务等这里介绍公司的信息，主营业务等",
      imagesbox: [
        { id: 0, idView: require("../assets/images/6/6_08.png") },
        { id: 1, idView: require("../assets/images/6/6_10.png") },
        { id: 2, idView: require("../assets/images/6/6_12.png") }
      ],
      pics: [
        { imgUrl: require("../assets/images/6/6_18.png"), name: "微信" },
        { imgUrl: require("../assets/images/6/6_20.png"), name: "微博" }
      ]
    };
  },
  methods: {
    mouseOver() {
      this.isShown = !this.isShown;
    },
    mouseLeave() {
      this.isShown = !this.isShown;
    }
  }
};
</script>

<style lang="less" scoped>
.banner {
  margin-top: -86px;
  position: relative;
  height: 415px;
  background: url("../assets/images/6/6_01.png") no-repeat;
  background-size: 100% 100%;
  img {
    position: absolute;
    bottom: 150px;
    right: 50%;
  }
}
.introduce,
.contact {
  line-height: 26px;
  margin: 0 15%;
  .top {
    margin: 40px 0 60px 0;
    text-align: center;
    span {
      display: block;
      margin-top: 10px;
      font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
    }
  }
  .maintext {
    text-align: justify;
    letter-spacing: 2px;
    margin-bottom: 40px;
    display: inline-flex;
    justify-content: space-between;
    p {
      display: inline-block;
      width: 70%;
    }
  }
  .mask {
    margin: 6% 0;
    padding: 0 20%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .erweima {
      display: flex;
      li {
        text-align: center;
        &:first-child {
          margin-right: 10%;
        }
      }
    }
  }
}
.el-carousel__item {
  width: 210px;
  height: 120px;
}
</style>
