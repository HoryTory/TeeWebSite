<template>
  <div class="pagecontrol">
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
  </div>
</template>

<script>
export default {
  data() {
    return {
      pagesize: 3,
      index: 0
    };
  },
  methods: {
    pick(item, index) {
      this.index = index;
      console.log(this.index);
    }
  }
};
</script>

<style lang="less" scoped>
.pagecontrol {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 40px;
  img {
    height: 30px;
  }
  p {
    text-align: center;
    color: grey;
    height: 30px;
    width: 30px;
    line-height: 30px;
    margin: 0 10px;
    cursor: pointer;
    border-radius: 50%;
  }
  .hover {
    background-color: black;
    color: white;
  }
  span {
    color: grey;
    margin-left: 20px;
  }
}
</style>
