<template>
  <div class="container">
     <el-calendar v-model="value">
</el-calendar>
  </div>
</template>

<script>
export default {
    data(){
        return{
            value:new Date()
        }
    }

}
</script>

<style lang="less" scoped>
.container{
    background-image: url("../assets/images/0/0_01_01.jpg");
}
</style>>