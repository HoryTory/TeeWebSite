<template>
  <div>
    <div class="banner"></div>
    <div class="newactity">
      <el-image
        style="width: 510px; height: 420px"
        :src="require('../assets/images/5/5_05.png')"
        fit="fill"
      ></el-image>
      <div class="maincontent">
        <p>{{ content[0].title }}</p>
        <p v-html="content[0].ptitle"></p>
        <p>{{ content[0].pcontent }}</p>
        <el-image
          style="width: 40px; height: 40px"
          :src="require('../assets/images/5/5_08.png')"
          fit="fill"
          @click="showDetail"
        ></el-image>
      </div>
    </div>
    <span>往期精彩</span>
    <div class="recent">
      <ul>
        <li
          v-for="(item, index) in piclist"
          :key="index"
          @mouseover="mouseOver(index)"
          @mouseleave="mouseLeave(index)"
          @click="showDetail"
        >
          <el-image
            style="width: 265px; height: 200px"
            :src="item.imgUrl"
            fit="fill"
          ></el-image>
          <p>活动<img :src="item.enter" /></p>
          <img
            class="arrow"
            src="../assets/images/5/5_24.png"
            v-if="item.isShown"
          />
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      content: [
        {
          title: "最新活动",
          ptitle: "标题标题<br>标题标题标题标题",
          pcontent:
            "内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容\
            内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容\
            内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容\
            内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容"
        }
      ],
      piclist: [
        {
          imgUrl: require("../assets/images/5/5_15.png"),
          enter: require("../assets/images/5/5_30.png"),
          isShown: false
        },
        {
          imgUrl: require("../assets/images/5/5_15.png"),
          enter: require("../assets/images/5/5_30.png"),
          isShown: false
        },
        {
          imgUrl: require("../assets/images/5/5_15.png"),
          enter: require("../assets/images/5/5_30.png"),
          isShown: false
        },
        {
          imgUrl: require("../assets/images/5/5_15.png"),
          enter: require("../assets/images/5/5_30.png"),
          isShown: false
        }
      ]
    };
  },
  methods: {
    mouseOver(index) {
      this.piclist[index].enter = require("../assets/images/5/5_27.png");
      this.piclist[index].imgUrl = require("../assets/images/5/5_13.png");
      this.piclist[index].isShown = true;
    },
    mouseLeave(index) {
      this.piclist[index].enter = require("../assets/images/5/5_30.png");
      this.piclist[index].imgUrl = require("../assets/images/5/5_15.png");
      this.piclist[index].isShown = false;
    },
    showDetail() {
      this.$router.push({ path: "/activity/detail" });
    }
  }
};
</script>

<style lang="less" scoped>
.banner {
  box-shadow: 0px 5px 3px #dedcdd;
  height: 415px;
  position: relative;
  background: url("../assets/images/5/5_02.png") no-repeat;
  background-size: 100% 100%;
}
.newactity {
  display: flex;
  padding: 8% 15% 10% 15%;
  border-bottom: 2px solid #f5f5f5;
  justify-content: space-between;
  .el-image:first-child {
    box-shadow: -3px 3px 3px #dedcdd;
  }
  .maincontent {
    width: 420px;
    letter-spacing: 2px;
    p {
      text-align: justify;
      display: block;
      &:nth-child(1) {
        box-sizing: border-box;
        background-color: #017431;
        color: white;
        width: 120px;
        height: 30px;
        line-height: 30px;
        padding-left: 20px;
        font-size: 14px;
        font-weight: lighter;
        margin-bottom: 15px;
      }
      &:nth-child(2) {
        line-height: 45px;
        font-size: 38px;
        color: #017332;
        font-family: SimSun;
      }
      &:nth-child(3) {
        margin: 5px 0 30px;
      }
    }
    .el-image:hover {
      cursor: pointer;
    }
  }
}
span {
  display: block;
  background-color: white;
  line-height: 70px;
  text-align: center;
  height: 70px;
  width: 220px;
  font-size: 1.5em;
  color: #838383;
  letter-spacing: 3px;
  margin: -35px auto;
}
.recent {
  margin: 6% 10%;
  li {
    position: relative;
    display: inline-block;
    margin-right: 20px;
    &:hover {
      cursor: pointer;
      p {
        color: #629479;
      }
    }
    p {
      display: flex;
      justify-content: center;
      margin-top: 5px;
      img {
        margin-left: 10px;
      }
    }
    img[class="arrow"] {
      position: absolute;
      top: 84px;
      left: 120px;
      height: 50px;
    }
  }
}
</style>
