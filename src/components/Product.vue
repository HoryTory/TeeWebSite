<template>
  <div>
    <div class="toper"></div>
    <div class="banner"></div>
    <ul>
      <li v-for="(item, index) in productLst" :key="index">
        <div class="zoneLst">
          <el-image
            style="width:220px;height:345px;margin-right:25px"
            fit="fill"
            :src="item.zoneImgUrl"
          ></el-image>
          <div class="main">
            <el-image
              style="width:365px;height:345px"
              fit="fill"
              v-for="(url, index) in item.urls"
              :key="index"
              :src="url"
            ></el-image>
            <div class="allDes">
              <div
                class="introduction"
                v-for="(content, index) in item.content"
                :key="index"
              >
                <p>{{ content.title }}</p>
                <p>
                  {{ content.text }}
                </p>
                <img
                  src="../assets/images/2/2_15.png"
                  style="height:20px;margin:40px 10px 0px 30px"
                />
              </div>
            </div>
          </div>
        </div>
        <PageSelector></PageSelector>
      </li>
    </ul>
  </div>
</template>

<script>
import PageSelector from "../component/pageselect";
export default {
  data() {
    return {
      productLst: [
        {
          zoneImgUrl: require("../assets/images/2/2_05.png"),
          urls: [
            require("../assets/images/2/2_10.jpg"),
            require("../assets/images/2/2_10.jpg")
          ],
          content: [
            {
              title: "明前龙井",
              text:
                "简要的介绍简要的介绍简要的介绍简要的介绍简要的介绍简要的介绍简要的介绍"
            },
            {
              title: "雨前龙井",
              text:
                "简要的介绍简要的介绍简要的介绍简要的介绍简要的介绍简要的介绍简要的介绍"
            }
          ]
        },
        {
          zoneImgUrl: require("../assets/images/2/2_08.png"),
          urls: [
            require("../assets/images/2/2_10.jpg"),
            require("../assets/images/2/2_10.jpg")
          ],
          content: [
            {
              title: "西湖龙井",
              text:
                "简要的介绍简要的介绍简要的介绍简要的介绍简要的介绍简要的介绍简要的介绍"
            },
            {
              title: "特色绿茶",
              text:
                "简要的介绍简要的介绍简要的介绍简要的介绍简要的介绍简要的介绍简要的介绍"
            }
          ]
        }
      ]
    };
  },
  components: {
    PageSelector
  }
};
</script>

<style lang="less" scoped>
.toper {
  height: 86px;
  background-color: #f9f9f9;
}
.banner {
  height: 415px;
  background: url("../assets/images/2/2_02.png") no-repeat;
  background-size: 100% 100%;
}
.zoneLst {
  margin: 6% 15%;
  display: flex;
  // justify-content: space-between;
  .el-image {
    border: 2px solid #f3f3f3;
  }
  .main {
    display: flex;
    justify-content: space-between;
    width: calc(100% - 245px);
    position: relative;
    .allDes {
      display: flex;
      position: absolute;
      bottom: 0;
      .introduction {
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 90px;
        width: 365px;
        margin-right: 25px;
        p {
          &:nth-child(1) {
            white-space: nowrap;
            font-weight: bold;
            margin: 0 40px;
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
</style>
