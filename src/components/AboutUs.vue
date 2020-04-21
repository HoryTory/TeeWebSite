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
      <div class="carousel">
        <i class="el-icon-arrow-left"></i>
        <el-image
          style="height:100px;width:200px"
          v-for="item in imagesbox"
          :key="item.id"
          :src="item.idView"
        ></el-image>
        <i class="el-icon-arrow-right"></i>
      </div>
    </div>
    <div class="contact">
      <div class="top">
        <p>联系我们</p>
        <span>CONTACT US</span>
      </div>
      <!-- <el-image
        style="width: 100%; height: 250px"
        :src="require('../assets/images/6/map.png')"
        fit="fill"
      ></el-image> -->
      <div class="mapBox" id="mapBox"></div>
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
import { MP } from "../map";
// import BMap from "BMap";
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
      ],
      ak: "ITWvsLofAlD5BI24btzmGiiuA0PVvqhM"
    };
  },
  methods: {
    mouseOver() {
      this.isShown = !this.isShown;
    },
    mouseLeave() {
      this.isShown = !this.isShown;
    },
    drawMap() {
      var map = new BMap.Map("mapBox"); // 创建Map实例
      var point = new BMap.Point(120.116507, 30.226216); //设置中心经纬度坐标
      map.centerAndZoom(point, 17); // 初始化地图,地图级别
      var mark = new BMap.Marker(point);
      map.addOverlay(mark); //添加标记
      mark.setAnimation(BMAP_ANIMATION_BOUNCE); //跳动的动画
      //添加地图类型控件
      map.addControl(
        new BMap.MapTypeControl({
          mapTypes: [BMAP_NORMAL_MAP, BMAP_HYBRID_MAP]
        })
      );
      map.setCurrentCity("杭州"); // 设置地图显示的城市 此项是必须设置的
      map.enableScrollWheelZoom(true); //开启鼠标滚轮缩放
      var sContent = "公司地址公司地址";
      var opt = { width: 80, height: 45, title: "公司名称" };
      var infoWindow = new BMap.InfoWindow(sContent, opt); // 创建信息窗口对象
      map.openInfoWindow(infoWindow, point); //开启信息窗口
    }
  },
  mounted() {
    this.$nextTick(() => {
      MP(this.ak).then(BMap => {
        console.log(BMap);
        this.drawMap();
      });
    });
  }
};
</script>

<style lang="less" scoped>
.banner {
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
  .mapBox {
    height: 300px;
    width: 100%;
    border-radius: 5px;
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
  .carousel {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 40px 5%;
    i {
      font-size: 50px;
      color: lightgrey;
    }
  }
}
</style>
