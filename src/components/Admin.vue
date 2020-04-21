<template>
  <el-container>
    <el-header>
      <span>LOGO</span>
      <div class="admin">
        <el-avatar :src="admin.avatar"></el-avatar>
        <p>{{ admin.name }}</p>
        <p @click="signout">
          <i
            class="el-icon-switch-button"
            style="margin-right:10px;color:#7fb4fd"
          ></i
          >退出系统
        </p>
      </div>
    </el-header>
    <el-container>
      <el-aside width="72px">
        <el-row class="tac">
          <el-col :span="24">
            <el-menu
              :default-active="this.$route.path"
              router
              class="el-menu-vertical-demo"
              @open="handleOpen"
              @close="handleClose"
              text-color="#fff"
              active-text-color="#fff"
              background-color="transparent"
              style="width:72px"
            >
              <el-menu-item index="#">
                <i class="el-icon-document icons">
                  <p class="nav-title">文章</p>
                </i>
              </el-menu-item>
              <el-menu-item index="/admin">
                <i class="el-icon-present icons">
                  <p class="nav-title">活动</p>
                </i>
              </el-menu-item>
            </el-menu>
          </el-col>
        </el-row>
      </el-aside>
      <el-main>
        <div class="searchBox">
          <el-input placeholder="按活动名称搜索"></el-input>
          <el-button type="primary" icon="el-icon-search"></el-button>
        </div>
        <el-card class="box-card" shadow="hover">
          <div slot="header">
            <span>活动列表</span>
          </div>
          <el-table
            ref="multipleTable"
            :data="
              tableData.slice(
                (currentPage - 1) * pagesize,
                currentPage * pagesize
              )
            "
            stripe
            style="width: 100%"
            :header-cell-style="{ background: '#E9F2FB' }"
          >
            <el-table-column
              type="selection"
              width="55"
              align="center"
            ></el-table-column>
            <el-table-column
              label="序号"
              type="index"
              width="100"
              align="center"
            ></el-table-column>
            <el-table-column
              prop="name"
              label="活动名称"
              width="365"
              align="center"
            >
            </el-table-column>
            <el-table-column
              prop="counter"
              label="报名人数"
              width="460"
              align="center"
              style="color:grey"
            >
            </el-table-column>
            <el-table-column label="报名详情" align="center">
              <template slot-scope="scope">
                <el-button type="text" @click="ShowDetail(scope.row.id)"
                  >详情</el-button
                ></template
              >
            </el-table-column>
          </el-table>
          <el-pagination
            :page-sizes="pageSizes"
            background
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page="currentPage"
            :page-size="pagesize"
            layout="total, prev, pager, next, sizes, jumper"
            :total="total"
          ></el-pagination>
        </el-card>

        <!-- 详情dialog -->
        <el-dialog
          title="报名信息"
          :visible.sync="detailDialog"
          width="1000px"
          top="20vh"
        >
          <el-table
            :data="
              gridData.slice(
                (detailcurrentPage - 1) * detailpagesize,
                detailcurrentPage * detailpagesize
              )
            "
            stripe
            style="width: 100%"
            :header-cell-style="{ background: '#E9F2FB' }"
          >
            <el-table-column
              label="序号"
              type="index"
              width="300px"
              align="center"
            ></el-table-column>
            <el-table-column
              property="uname"
              label="姓名"
              align="center"
            ></el-table-column>
            <el-table-column
              property="utelephone"
              label="手机号码"
              align="center"
            ></el-table-column>
          </el-table>
          <el-pagination
            :page-sizes="detailpageSizes"
            background
            @size-change="handledetailSizeChange"
            @current-change="handledetailCurrentChange"
            :current-page="detailcurrentPage"
            :page-size="detailpagesize"
            layout="total, prev, pager, next, sizes, jumper"
            :total="detailtotal"
          ></el-pagination>
        </el-dialog>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {
  data() {
    return {
      gridData: [],
      detailDialog: false,
      admin: {
        avatar: require("../assets/images/avatar/ava0.jpg"),
        name: "管理员"
      },
      tableData: [
        {
          id: "001",
          name: "茶叶活动活动活动活动活动活动",
          counter: "5",
          applyedLst: [
            { uname: "李先生", utelephone: "13858962354" },
            { uname: "王先生", utelephone: "13755698546" },
            { uname: "蔡女士", utelephone: "15022697548" },
            { uname: "李女士", utelephone: "18966457788" },
            { uname: "方先生", utelephone: "13666492258" }
          ]
        },
        {
          id: "002",
          name: "茶叶活动活动活动活动活动活动",
          counter: "3",
          applyedLst: [
            { uname: "李先生", utelephone: "13858962354" },
            { uname: "王先生", utelephone: "13755698546" },
            { uname: "蔡女士", utelephone: "15022697548" }
          ]
        },
        {
          id: "003",
          name: "茶叶活动活动活动活动活动活动",
          counter: "4",
          applyedLst: [
            { uname: "李先生", utelephone: "13858962354" },
            { uname: "王先生", utelephone: "13755698546" },
            { uname: "李女士", utelephone: "18966457788" },
            { uname: "方先生", utelephone: "13666492258" }
          ]
        },
        {
          id: "004",
          name: "茶叶活动活动活动活动活动活动",
          counter: "5",
          applyedLst: [
            { uname: "李先生", utelephone: "13858962354" },
            { uname: "王先生", utelephone: "13755698546" },
            { uname: "蔡女士", utelephone: "15022697548" },
            { uname: "李女士", utelephone: "18966457788" },
            { uname: "方先生", utelephone: "13666492258" }
          ]
        },
        {
          id: "005",
          name: "茶叶活动活动活动活动活动活动",
          counter: "1",
          applyedLst: [{ uname: "方先生", utelephone: "13666492258" }]
        },
        {
          id: "006",
          name: "茶叶活动活动活动活动活动活动",
          counter: "5",
          applyedLst: [
            { uname: "李先生", utelephone: "13858962354" },
            { uname: "王先生", utelephone: "13755698546" },
            { uname: "蔡女士", utelephone: "15022697548" },
            { uname: "李女士", utelephone: "18966457788" },
            { uname: "方先生", utelephone: "13666492258" }
          ]
        },
        {
          id: "007",
          name: "茶叶活动活动活动活动活动活动",
          counter: "5",
          applyedLst: [
            { uname: "李先生", utelephone: "13858962354" },
            { uname: "王先生", utelephone: "13755698546" },
            { uname: "蔡女士", utelephone: "15022697548" },
            { uname: "李女士", utelephone: "18966457788" },
            { uname: "方先生", utelephone: "13666492258" }
          ]
        }
      ],
      multipleTable: [],
      pagesize: 10,
      pageSizes: [5, 10, 20, 30],
      currentPage: 1,
      total: 0,

      detailpagesize: 5,
      detailpageSizes: [2, 5, 10],
      detailcurrentPage: 1,
      detailtotal: 0
    };
  },
  methods: {
    signout() {
      this.$router.push({ path: "/login" });
    },
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
      this.pagesize = val;
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
      this.currentPage = val;
    },
    handledetailSizeChange(val) {
      this.detailpagesize = val;
    },
    handledetailCurrentChange(val) {
      console.log(`当前页: ${val}`);
      this.detailcurrentPage = val;
    },
    ShowDetail(idx) {
      console.log(idx);
      this.detailDialog = true;
      this.tableData.filter(item => {
        if (item.id === idx) {
          this.gridData = item.applyedLst;
        }
      });
      this.detailtotal = this.gridData.length;
      console.log(JSON.stringify(this.gridData));
    }
  },
  created() {
    this.total = this.tableData.length;
  }
};
</script>

<style lang="less" scoped>
.el-header {
  position: fixed;
  width: 100%;
  z-index: 1;
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0px 2px 5px #e7e8ef;
  span {
    font-size: 30px;
  }
  .admin {
    display: flex;
    justify-content: space-between;
    align-items: center;
    .el-avatar {
      margin-right: 10px;
      border: 1px solid #7fb4fd;
    }
    p {
      margin-right: 20px;
      font-size: 14px;
      color: grey;
      &:nth-of-type(2):hover {
        cursor: pointer;
      }
    }
  }
}
.el-container {
  height: 100%;
  .el-aside {
    position: fixed;
    margin-top: 60px;
    height: 100%;
    background-color: #364967;
    .icons {
      font-size: 20px;
      color: white;
    }
    .nav-title {
      font-size: 14px;
      text-align: center;
      margin: 5px -15px;
      color: #fff;
    }
    .el-menu-item {
      height: 65px;
      line-height: 65px;
      //  被激活的
      &:hover {
        background: #0540b4 !important;
      }
      &.is-active {
        border-left: 3px solid #3a89fe;
        background: #1d498a !important;
      }
    }
  }
  .el-main {
    margin-top: 60px;
    margin-left: 73px;
    background-color: #f5f8fd;
    .searchBox {
      display: flex;
      justify-content: center;
      .el-input {
        width: 385px;
        box-shadow: 0px 2px 5px #e7e8ef;
      }
    }
    .box-card {
      margin: 20px 40px 0 0;
      /deep/ .el-card__header {
        border: none;
        span {
          border-left: 8px solid #297af0;
          padding-left: 15px;
        }
      }
      .el-table {
        /deep/ td {
          border: none;
          padding: 2px 0;
        }
        /deep/ .cell {
          color: grey;
          max-height: 150px;
        }
        .el-button {
          /deep/ span {
            color: #409eff;
            border-bottom: 1px solid #afcaff;
          }
        }
      }
      .el-pagination {
        text-align: right;
        margin: 40px 0;
        /deep/ .el-pagination__jump {
          margin-left: 0;
        }
      }
    }
    .el-dialog {
      .el-pagination {
        text-align: right;
        margin: 40px 0;
        /deep/ .el-pagination__jump {
          margin-left: 0;
        }
      }
    }
    .el-dialog__wrapper /deep/ .el-dialog__header > span {
      border-left: 8px solid #297af0;
      padding-left: 15px;
    }
  }
}
</style>
