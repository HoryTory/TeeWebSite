<template>
  <div>
    <div class="banner"></div>
    <div class="details">
        <div class="top">
            <p>{{details[0].title}}</p>
            <p>{{details[0].time}}</p>
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
        <p class="content">{{details[0].content}}</p>
        <div class="footer">
            <div class="inputBox">
                <p>报名方式：</p>
                <el-input v-model="input" placeholder="输入手机号"></el-input>
                <el-button>立即报名</el-button>
            </div>
            <div class="backBox">
                <div class="box" @click="goback">
                    <img src="../assets/images/4-1/4-1_11.png">
                    <p>返回</p>
                </div>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
    data(){
        return{
            input:"",
            details:[{
                title:"标题标题标题标题标题标题标题标题标题",
                time:"2018/03/03",
                imgLeftUrl:require("../assets/images/5-1/5-1_06.jpg"),
                imgRightUrl:require("../assets/images/5-1/5-1_03.png"),
                content:"文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章\
                内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容"
            }]
        }
    },
    methods:{
        goback(){
            this.$router.go(-1);
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
.details{
    margin: 4% 16.5%;
    .top{
        text-align: center;
        letter-spacing: 2px;
        p{
            &:nth-child(1){
                font-size:18px;
                font-weight: bold;
            }
            &:nth-child(2){
                margin: 25px 0;
                color:grey
            }
        }
    }
    .main{
        display: flex;
        justify-content: space-between;
        margin: 0px 40px 50px 30px;
    }
    .content{
        display: block;
        line-height: 40px;
        font-weight: lighter;
        text-indent:2em;
        margin-bottom: 50px;
    }
}
.footer{
    .inputBox{
        display: flex;
        margin-bottom: 60px;
        p{
            font-size: 20px;
        }
        /deep/ .el-input{
            margin-left: 20px;
            width: 190px;
            .el-input__inner{
                height: 50px;
            }
        }
        .el-button{
            background-color: #808080;
            font-size: 16px;
            /deep/ span{
                color:white;
            }
        }
    }
    .backBox{
        display: flex;
        justify-content: flex-end;
        margin-right: 15%;
        .box{
            display: inline-flex;
            &:hover{
                cursor: pointer;
            }
            p{
                color:grey;
                margin-left: 10px;
            }
        }
    }
}
</style>></style>
