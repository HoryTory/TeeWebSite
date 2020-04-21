<template>
  <div>
    <div class="toper"></div>
    <div class="banner"></div>
    <div class="imgsBox">
      <p @click="showDetails">{{ content }}</p>
      <el-image
        style="width: 620px; height:695px"
        :src="require('../assets/images/4/4_05.png')"
        fit="fill"
      ></el-image>
      <ul>
        <li v-for="(item, index) in pics" :key="index">
          <el-image
            style="width: 200px; height:225px"
            :src="item.imgUrl"
            fit="fill"
          ></el-image>
        </li>
      </ul>
    </div>
    <div class="description">
      <p v-for="(item, index) in sayings" :key="index">
        {{ item.stext }}
        <span>— —关于茶文化的内容</span>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      content:
        "内容简介内容简介内容简介内容简介内容简介内容简介内容简介内容简介内容简介内容简介内容简介内容简介",
      pics: [
        { imgUrl: require("../assets/images/4/4_07.png") },
        { imgUrl: require("../assets/images/4/4_10.png") },
        { imgUrl: require("../assets/images/4/4_12.png") }
      ],
      sayings: [
        { stext: "关于茶文化的内容关于茶文化的内容" },
        { stext: "关于茶文化的内容关于茶文化的内容关于茶文化的内容" },
        {
          stext:
            "关于茶文化的内容关于茶文化的内容关于茶文化的内容关于茶文化的内容"
        }
      ]
    };
  },
  methods: {
    showDetails() {
      this.$router.push("/culture/detail");
    }
  }
};
</script>

<style lang="less" scoped>
.toper {
  height: 82px;
  background-color: #fbfbfb;
}
.banner {
  position: relative;
  height: 350px;
  background: url("../assets/images/4/4_02.png") no-repeat;
  background-size: 100% 100%;
}
.imgsBox {
  margin: 8% 20%;
  padding-right: 25px;
  position: relative;
  display: flex;
  justify-content: space-between;
  p {
    display: block;
    position: absolute;
    bottom: 20px;
    z-index: 1;
    left: 21px;
    font-size: 1.2em;
    text-align: justify;
    height: 85px;
    width: 575px;
    padding: 16px;
    box-sizing: border-box;
    &:hover {
      cursor: pointer;
    }
  }
  .el-image {
    box-shadow: -2px 1px 4px grey;
  }
  ul {
    display: inline-flex;
    flex-direction: column;
    justify-content: space-between;
  }
}
.description {
  height: 170px;
  background-color: #f0f0f0;
  padding: 30px 20%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  p {
    display: flex;
    font-size: 16px;
    justify-content: space-between;
    letter-spacing: 2px;
  }
}
</style>
