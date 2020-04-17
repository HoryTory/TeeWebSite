<template>
  <div>
    <div class="banner" @mouseover="mouseOver" @mouseleave="mouseLeave">
      <img src="../assets/images/3/3_04.png" v-if="isShown" />
    </div>
    <div class="newsli">
      <div class="top">
        <p>
          站在最前沿，才是最新闻
        </p>
        <span>STANDING AT THE FOREFRONT,THERE IS THE MOST NEWS</span>
      </div>
      <ul>
        <li v-for="(item, index) in newslst" :key="index">
          <el-image
            style="width:460px;height:290px"
            fit="fill"
            :src="item.imgUrl"
          ></el-image>
          <div class="newscontent">
            <p>{{ item.title }}</p>
            <p>{{ item.content }}</p>
            <p>{{ item.time }}</p>
            <el-button>详情</el-button>
          </div>
        </li>
      </ul>
      <ul>
        <li v-for="(item, index) in newspage" :key="index">
          <div class="pagedate">
            <p>{{ item.pagetime.split("-")[2][1] }}</p>
            <p>{{ item.pagetime.slice(0, 7) }}</p>
          </div>
          <div class="pagetext">
            <p>{{ item.pagetitle }}</p>
            <p>{{ item.pagecontent }}</p>
          </div>
          <i
            class="el-icon-d-arrow-right"
            style="font-size: 30px;
                   line-height: 68px;
                   color: grey"
          ></i>
        </li>
        <!-- <div class="pagecontrol">
          <img src="../assets/images/2/2_19.png" />
          <p
            v-for="(item, idx) in pagesize"
            :key="idx"
            :class="idx === index ? 'hover' : ''"
            @click="pick(item, idx)"
          >
            {{ item }}
          </p>
          <img src="../assets/images/2/2_23.png" />
          <span>共{{ pagesize }}页</span>
        </div> -->
        <PageSeletor></PageSeletor>
      </ul>
    </div>
  </div>
</template>

<script>
import PageSeletor from "../component/pageselect";
export default {
  data() {
    return {
      isShown: false,
      // pagesize: 3,
      // index: 0,
      newslst: [
        {
          imgUrl: require("../assets/images/3/3_08.png"),
          title: "这里是标题这里是标题这里是标题这里是标题这里是标题这里是标题",
          content:
            "简要内容介绍简要内容介绍简要内容介绍简要内容介绍简要内容介绍简要内容介绍\
            简要内容介绍简要内容介绍简要内容介绍简要内容介绍简要内容介绍简要内容介绍\
            简要内容介绍简要内容介绍",
          time: "2018/04/23"
        },
        {
          imgUrl: require("../assets/images/3/3_08.png"),
          title: "这里是标题这里是标题这里是标题这里是标题这里是标题这里是标题",
          content:
            "简要内容介绍简要内容介绍简要内容介绍简要内容介绍简要内容介绍简要内容介绍\
            简要内容介绍简要内容介绍简要内容介绍简要内容介绍简要内容介绍简要内容介绍\
            简要内容介绍简要内容介绍",
          time: "2018/04/23"
        },
        {
          imgUrl: require("../assets/images/3/3_08.png"),
          title: "这里是标题这里是标题这里是标题这里是标题这里是标题这里是标题",
          content:
            "简要内容介绍简要内容介绍简要内容介绍简要内容介绍简要内容介绍简要内容介绍\
            简要内容介绍简要内容介绍简要内容介绍简要内容介绍简要内容介绍简要内容介绍\
            简要内容介绍简要内容介绍",
          time: "2018/04/23"
        }
      ],
      newspage: [
        {
          pagetime: "2018-03-01",
          pagetitle: "热烈祝贺春季新茶上新成功",
          pagecontent:
            "热烈祝贺春季新茶上新成功热烈祝贺春季新茶上新成功热烈祝贺春季新茶上新成功热烈祝贺春季新茶上新成功热烈祝贺春季新茶上新成功"
        },
        {
          pagetime: "2018-09-05",
          pagetitle: "热烈祝贺秋季新茶上新成功",
          pagecontent:
            "热烈祝贺秋季新茶上新成功热烈祝贺秋季新茶上新成功热烈祝贺秋季新茶上新成功热烈祝贺秋季新茶上新成功热烈祝贺秋季新茶上新成功"
        },
        {
          pagetime: "2018-12-09",
          pagetitle: "热烈祝贺冬季新茶上新成功",
          pagecontent:
            "热烈祝贺冬季新茶上新成功热烈祝贺冬季新茶上新成功热烈祝贺冬季新茶上新成功热烈祝贺冬季新茶上新成功热烈祝贺冬季新茶上新成功"
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
    }
    // pick(item, index) {
    //   this.index = index;
    //   console.log(this.index);
    // }
  },
  components: {
    PageSeletor
  }
};
</script>

<style lang="less" scoped>
.banner {
  margin-top: -86px;
  height: 415px;
  position: relative;
  background: url("../assets/images/3/3_01.png") no-repeat;
  background-size: 100% 100%;
  img {
    position: absolute;
    bottom: 150px;
    right: 50%;
  }
}
.newsli {
  margin: 0 10%;
  .top {
    margin: 40px 0 60px 0;
    text-align: center;
    span {
      display: block;
      margin-top: 10px;
      font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
    }
  }
  li {
    display: flex;
    justify-content: space-between;
    margin-bottom: 50px;
    .newscontent {
      width: 625px;
      p {
        text-align: justify;
        display: block;
        color: grey;
        &:nth-child(1) {
          font-size: 21px;
          color: black;
          letter-spacing: 4px;
          line-height: 30px;
        }
        &:nth-child(2) {
          font-size: 16px;
          margin: 30px 0;
        }
        &:nth-child(3) {
          text-align: right;
        }
      }
      .el-button {
        height: 50px;
        width: 195px;
        border: 2px solid black;
        border-radius: 0;
        font-size: 20px;
        margin: 35px 0 0 0;
        float: right;
      }
    }
    .pagedate {
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
    .pagetext {
      padding: 0 14% 0 20px;
      p {
        letter-spacing: 2px;
        &:nth-child(1) {
          margin-bottom: 5px;
          font-weight: bold;
        }
        &:nth-child(2) {
          color: grey;
        }
      }
    }
  }
  // .pagecontrol {
  //   display: flex;
  //   justify-content: center;
  //   align-items: center;
  //   margin: 40px;
  //   img {
  //     height: 30px;
  //   }
  //   p {
  //     text-align: center;
  //     color: grey;
  //     height: 30px;
  //     width: 30px;
  //     line-height: 30px;
  //     margin: 0 10px;
  //     cursor: pointer;
  //     border-radius: 50%;
  //   }
  //   .hover {
  //     background-color: black;
  //     color: white;
  //   }
  //   span {
  //     color: grey;
  //     margin-left: 20px;
  //   }
  // }
}
</style>
