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
        <el-image
          style="width:96%;height:60px;margin-left:2%"
          fit="fill"
          :src="picLst[3]"
        ></el-image>
        <el-image class="font" fit="fill" :src="picLst[4]"></el-image>
      </div>
      <div class="aboutus">
        <div class="circles">
          <div class="circle"></div>
          <div class="circle"></div>
          <div class="circle"></div>
        </div>
        <p>关于我们</p>
        <p>ABOUT US</p>
        <p>{{ aboutus }}</p>
        <el-button>查看详情</el-button>
      </div>
      <div class="moreBox">
        <i class="el-icon-arrow-left"></i>
        <el-image
          style="width:565px;height:395px"
          fit="fill"
          :src="url"
        ></el-image>
        <div class="allInfo">
          <p>{{ info.title }}</p>
          <p>{{ info.engtitle }}</p>
          <p>{{ info.content }}</p>
          <el-button>更多</el-button>
        </div>
        <i class="el-icon-arrow-right"></i>
      </div>
      <div class="teaculture">
        <div class="top">
          <p>茶文化</p>
          <p>TEA CULTURE</p>
        </div>
        <div class="titles">
          <p
            @click="picked(index)"
            v-for="(item, index) in zones"
            :key="index"
            :class="index === showIdx ? 'active' : ''"
          >
            {{ item.zonename }}
          </p>
        </div>
        <div class="details">
          <template v-if="zones[showIdx]">
            <p v-html="zones[showIdx].detail"></p>
            <el-button>查看详情</el-button>
          </template>
        </div>
      </div>
      <div class="news">
        <div class="top">
          <p>新闻</p>
          <p>NEWS</p>
        </div>
        <ul>
          <li v-for="(item, index) in newsLst" :key="index">
            <div class="newsdate">
              <p>{{ parseInt(item.time.split("-")[2]) }}</p>
              <p>{{ item.time.slice(0, 7) }}</p>
            </div>
            <div class="newstext">
              <p>{{ item.title }}</p>
              <p>{{ item.content }}</p>
            </div>
          </li>
        </ul>
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
      showIdx: 0,
      picLst: [
        require("../assets/images/1/1_07.png"),
        require("../assets/images/1/1_12.png"),
        require("../assets/images/1/1_09.png"),
        require("../assets/images/1/1_17.png"),
        require("../assets/images/1/1_21.png")
      ],
      aboutus:
        "华为是全球领先的信息与通信技术（ICT）解决方案供应商，专注于ICT领域，坚持稳健经营、持续创新、开放合作，在电信云运营商、企业、终端和云计算等领域构造了端到端的解决。。。\
        华为是全球领先的信息与通信技术（ICT）解决方案供应商，专注于ICT领域，坚持稳健经营、持续创新、开放合作，在电信云运营商、企业、终端和云计算等领域构造了端到端的解决。。。",
      url: require("../assets/images/1/1_25.png"),
      info: {
        title: "古典黑光精品茶",
        engtitle: "FINE BLACK CANISTER LONGJING TEA",
        content:
          "请介绍下这款产品，图片也来几张请介绍下这款产品，图片也来几张请介绍下这款产品，图片也来几张请介绍下这款产品，图片也来几张请介绍下这款产品，图片也来几张"
      },
      zones: [
        {
          zonename: "名茶",
          detail:
            "请把名茶介绍放在这里谢谢请把名茶介绍放在这里谢谢<br>请把名茶介绍放在这里谢谢请把名茶介绍放在这里谢谢<br>请把名茶介绍放在这里谢谢请把名茶介绍放在这里谢谢请把名茶介绍放在这里谢谢<br>请把名茶介绍放在这里谢谢请把名茶介绍放在这里谢谢请把名茶介绍放在这里谢谢"
        },
        {
          zonename: "茶道",
          detail:
            "请把茶道介绍放在这里谢谢请把茶道介绍放在这里谢谢<br>请把茶道介绍放在这里谢谢请把茶道介绍放在这里谢谢<br>请把茶道介绍放在这里谢谢请把茶道介绍放在这里谢谢请把茶道介绍放在这里谢谢<br>请把茶道介绍放在这里谢谢请把茶道介绍放在这里谢谢请把茶道介绍放在这里谢谢"
        },
        {
          zonename: "茶具",
          detail:
            "请把茶具介绍放在这里谢谢请把茶具介绍放在这里谢谢<br>请把茶具介绍放在这里谢谢请把茶具介绍放在这里谢谢<br>请把茶具介绍放在这里谢谢请把茶具介绍放在这里谢谢请把茶具介绍放在这里谢谢<br>请把茶具介绍放在这里谢谢请把茶具介绍放在这里谢谢请把茶具介绍放在这里谢谢"
        },
        {
          zonename: "茶艺",
          detail:
            "请把茶艺介绍放在这里谢谢请把茶艺介绍放在这里谢谢<br>请把茶艺介绍放在这里谢谢请把茶艺介绍放在这里谢谢<br>请把茶艺介绍放在这里谢谢请把茶艺介绍放在这里谢谢请把茶艺介绍放在这里谢谢<br>请把茶艺介绍放在这里谢谢请把茶艺介绍放在这里谢谢请把茶艺介绍放在这里谢谢"
        },
        {
          zonename: "茶健康",
          detail:
            "请把茶健康介绍放在这里谢谢请把茶健康介绍放在这里谢谢<br>请把茶健康介绍放在这里谢谢请把茶健康介绍放在这里谢谢<br>请把茶健康介绍放在这里谢谢请把茶健康介绍放在这里谢谢请把茶健康介绍放在这里谢谢<br>请把茶健康介绍放在这里谢谢请把茶健康介绍放在这里谢谢请把茶健康介绍放在这里谢谢"
        }
      ],
      newsLst: [
        {
          time: "2018-03-01",
          title: "热烈祝贺春季新茶上新成功",
          content:
            "热烈祝贺春季新茶上新成功热烈祝贺春季新茶上新成功热烈祝贺春季新茶上新成功热烈祝贺春季新茶上新成功"
        },
        {
          time: "2018-03-09",
          title: "热烈祝贺春季新茶上新成功",
          content:
            "热烈祝贺春季新茶上新成功热烈祝贺春季新茶上新成功热烈祝贺春季新茶上新成功热烈祝贺春季新茶上新成功"
        },
        {
          time: "2018-04-15",
          title: "热烈祝贺春季新茶上新成功",
          content:
            "热烈祝贺春季新茶上新成功热烈祝贺春季新茶上新成功热烈祝贺春季新茶上新成功热烈祝贺春季新茶上新成功"
        },
        {
          time: "2018-05-27",
          title: "热烈祝贺春季新茶上新成功",
          content:
            "热烈祝贺春季新茶上新成功热烈祝贺春季新茶上新成功热烈祝贺春季新茶上新成功热烈祝贺春季新茶上新成功"
        },
        {
          time: "2018-05-30",
          title: "热烈祝贺春季新茶上新成功",
          content:
            "热烈祝贺春季新茶上新成功热烈祝贺春季新茶上新成功热烈祝贺春季新茶上新成功热烈祝贺春季新茶上新成功"
        },
        {
          time: "2018-07-03",
          title: "热烈祝贺春季新茶上新成功",
          content:
            "热烈祝贺春季新茶上新成功热烈祝贺春季新茶上新成功热烈祝贺春季新茶上新成功热烈祝贺春季新茶上新成功"
        }
      ]
    };
  },
  components: {
    Nav,
    Footer
  },
  methods: {
    picked(index) {
      console.log(index);
      this.showIdx = index;
    }
  }
};
</script>

<style lang="less" scoped>
.el-main {
  padding: 0;
  width: 100%;
  .el-button {
    width: 150px;
    height: 35px;
    border: 1px solid black;
    border-radius: 0;
    background-color: transparent;
  }
  .top {
    text-align: center;
    p {
      &:nth-of-type(1) {
        display: inline-block;
        border-bottom: 2px solid black;
        padding: 7px;
      }
      &:nth-of-type(2) {
        font-size: 18px;
        font-weight: bold;
        padding-top: 7px;
      }
    }
  }
  .banner {
    position: relative;
    height: 435px;
    margin: 80px 25% 50px 25%;
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
  .aboutus {
    text-align: center;
    margin: 20px 10% 50px 10%;
    .circles {
      display: flex;
      justify-content: center;
      .circle {
        height: 12px;
        width: 12px;
        border-radius: 50%;
        border: 1px solid grey;
        margin-bottom: 30px;
        &:first-child {
          background-color: grey;
        }
        &:nth-child(2),
        &:nth-child(3) {
          margin-left: 20px;
        }
      }
    }
    p {
      &:nth-of-type(1) {
        display: inline-block;
        border-bottom: 2px solid black;
        padding-bottom: 9px;
      }
      &:nth-of-type(2) {
        font-size: 18px;
        font-weight: bold;
        padding-top: 7px;
      }
      &:nth-of-type(3) {
        margin: 40px 0;
        line-height: 30px;
        color: grey;
      }
    }
  }
  .moreBox {
    height: 475px;
    background-color: #f0f0f0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-sizing: border-box;
    padding: 2% 4%;
    i {
      font-size: 45px;
      color: grey;
    }
    .allInfo {
      width: 390px;
      text-align: center;
      p {
        &:nth-child(1) {
          font-size: 22px;
        }
        &:nth-child(2) {
          font-size: 12px;
          font-weight: bold;
          margin: 10px 0 40px 0;
        }
        &:nth-child(3) {
          margin-bottom: 80px;
        }
      }
    }
  }
  .teaculture {
    margin: 20px 10% 100px 10%;
    .titles {
      display: flex;
      justify-content: space-between;
      padding-bottom: 15px;
      margin-top: 60px;
      border-bottom: 3px solid black;
      line-height: 60px;
      p {
        font-size: 30px;
        letter-spacing: 4px;
        font-weight: lighter;
        border-right: 3px solid black;
        padding: 0 75px;
        &:last-child {
          border: none;
        }
        &:hover {
          cursor: pointer;
        }
      }
      .active {
        font-weight: 600;
      }
    }
    .details {
      margin: 6% 0 6% 20px;
      letter-spacing: 2px;
      display: flex;
      justify-content: space-between;
      align-items: flex-end;
      p {
        color: grey;
        line-height: 30px;
      }
    }
  }
  .news {
    height: 470px;
    background-color: #f0f0f0;
    margin-bottom: 5%;
    padding: 20px 6%;
    ul {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      margin-top: 40px;
      li {
        display: flex;
        justify-content: space-between;
        margin-bottom: 30px;
        width: 50%;
        .newsdate {
          p {
            text-align: center;
            background-color: #4d4d4d;
            color: white;
            width: 68px;
            &:nth-child(1) {
              height: 40px;
              line-height: 40px;
              font-size: 18px;
              border-bottom: 2px solid white;
            }
            &:nth-child(2) {
              height: 25px;
              line-height: 25px;
              font-size: 12px;
            }
          }
        }
        .newstext {
          padding: 0 40px 0 20px;
          p {
            letter-spacing: 2px;
            &:nth-child(1) {
              margin-bottom: 5px;
              font-weight: bold;
            }
            &:nth-child(2) {
              color: grey;
              font-size: 14px;
            }
          }
        }
      }
    }
  }
}
</style>
