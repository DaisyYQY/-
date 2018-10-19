<template>
  <div>
    <!--用户名：<input type="text" name="username" ref="username"/><br/>-->
    用户名：<input type="text" name="username" v-model="username"/><br/>
    姓名：<input type="text" name="name" v-model="name"/><br/>
    电话：<input type="tel" name="phone" v-model="phone"/><br/>
    密码：<input type="password" name="password" v-model="password"/><br/>
    E-mail: <input type="email" name="email" v-model="email"/><br/>
    权限编码：<input type="text" name="powerCode" v-model="powerCode"/><br/>
    <input type="submit" value="提交" class="up" @click="adduser"/><br/>
    <div>
      <el-form :inline="true" class="demo-form-inline">
        <el-form-item>
          <el-input v-model="tokenId" placeholder="删除"></el-input>
        </el-form-item>
        <el-form-item>
          <el-input v-model="searchText" placeholder="模糊查找：姓名"></el-input>
        </el-form-item>
        <el-form-item>
          <el-input v-model="pageStart" placeholder=""></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">查询</el-button>
        </el-form-item>
      </el-form>
      <el-table
        :data="tableData"
        border
        style="width: 90%;margin:0 auto">
        <el-table-column
          prop="tokenId"
          label="ID"
          width="180"
          v-model="tokenId">
        </el-table-column>
        <el-table-column
          prop="username"
          label="用户名"
          width="380">
        </el-table-column>
        <el-table-column
          prop="power"
          label="后台权限"
          width="180">
        </el-table-column>
        <el-table-column
          prop="phone"
          label="手机"
          width="180">
        </el-table-column>
        <el-table-column
          prop="createAt"
          label="编辑日期"
          width="225">
        </el-table-column>
        <el-table-column
          prop="do"
          label="操作"
          width="220">
          <template slot-scope="scope">
            <el-button type="text" size="small">编辑</el-button>
            <el-button type="text" size="small" @click="del(scope.row)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
      <el-pagination
        :page-size="3"
        layout="prev, pager, next"
        @current-change="currentPage"
        :total='count'
      class="page">
      </el-pagination>
    </div>
  </div>
</template>

<script>
  export default {
    data(){
      return {
        username:'',
        name:'',
        phone:'',
        password:'',
        email:'',
        powerCode:'',
        tokenId:'',
        searchText:'',
        tableData: [],
        count:0,
        pageStart:1
      }
    },
    methods: {
      adduser(){
        this.$http({
          url: "api/Handler/AdminLogin?action=add",
          method: "post",
          data:{
//            username:this.$refs.username.value,
            username:this.username,
            name:this.name,
            phone:this.phone,
            password:this.password,
            email:this.email,
            powerCode:this.powerCode
          }
        }).then((result)=>{
          console.log(result.data.err);
      })
      },
  del(row) {
//    console.log(row);
//    console.log(row.tokenId);

    this.$http({
      url: "api/Handler/AdminLogin?action=del",
      method: "post",
      data:{
        tokenId:row.tokenId
      }
    }).then((result)=>{
    this.onSubmit();
  })
  },
      onSubmit(){
        this.$http({
          url: "api/Handler/HandlerAdmin?action=getAdminList",
          method: "get",
          params:{
            searchText:this.searchText,
            pageStart:this.pageStart
          }
        }).then((result)=>{
          if(result.data.success=="成功"){
          this.tableData=result.data.data.list
          this.count=result.data.data.count
        }else{
          alert(result.data.success)
        }
        })
      },
      currentPage(index){
        this.pageStart=index;
        this.onSubmit()
//        console.log(arguments);
      }

    },
    mounted(){
      document.body.style.background="#fff";
//      this.$http({
//        url: "api/Handler/HandlerAdmin?action=getAdminList",
//        method: "get",
//        params:{
//          searchText:'',
//          pageStart:this.pageStart
//        }
//      }).then((result)=>{
////        console.log(result.data.data.count);
//        if(result.data.success=="成功"){
//        this.tableData=result.data.data.list
//          this.count=result.data.data.count
////        console.log(result.data.data);
//      }else{
//        alert(result.data.success)
//      }
//
//    })
      this.onSubmit()
    }
  }


</script>

<style scoped>
  input{
    border:1px solid #ccc;
  }
  .demo-form-inline{
    margin-left:80px;
  }
  .up{
    width:70px;
    height:30px;
  }
  .page{
    margin-left:60px;
    margin-top:30px;
  }
</style>








































