<template>
    <div class="box">
        <div class="header">
            <div class="nav">
                <a class="logo"><img src="../../static/img/3-1.png" alt=""></a>
                <div class="nav-Right">
                    <div class="headlogo"><a href="javascript:;"><img src="../../static/img/touxiang.jpg" alt=""></a></div>
                  <span @click="reset">修改密码</span>
                    <ul class="selectBox">
                        <li v-for="item in arr"><a href="javascript:;">{{item}}</a></li>
                    </ul>
                </div>
            </div>
            <div class="headBottom">
                <ul>
                    <li v-for="item in arr1"><a href="javascript:;">{{item}}</a></li>
                </ul>
            </div>
        </div>
        <div class="main">
            <div class="routerBox">
                <div class="router">
                    <a class="blue" href="Javascript:;">首页</a>/
                    <a href="Javascript:;">用户管理</a>/
                    <a href="Javascript:;">学员管理</a>
                </div>
            </div>
            <div class="searchBox">
                <div class="search">
                    <input class="inp" type="text" placeholder="用户名">
                    <input class="inp" type="text" placeholder="邮箱">
                    <input class="inp" type="text" placeholder="手机号">
                    <button class="submit">查询</button>
                </div>
            </div>
            <div class="listTable">
                <div class="listTitle">
                    <div class="titleIcon"></div>
                    <p class="title">系统人员列表</p>
                </div>
                <div class="table">
                    <table border="0">
                        <thead>
                        <tr>
                            <th class="one">用户名</th>
                            <th class="two">邮箱</th>
                            <th class="three">手机</th>
                            <th class="four">注册日期</th>
                            <th class="five">状态</th>
                            <th class="six">操作</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>Admin</td>
                            <td>管理员</td>
                            <td>系统管理员</td>
                            <td>2018-01-22</td>
                            <td>正常</td>
                            <td><a href="javascript:;">冻结</a></td>
                        </tr>
                        <tr>
                            <td>Admin</td>
                            <td>管理员</td>
                            <td>系统管理员</td>
                            <td>2018-01-22</td>
                            <td>正常</td>
                            <td><a href="javascript:;">冻结</a></td>
                        </tr>
                        <tr>
                            <td>Admin</td>
                            <td>管理员</td>
                            <td>系统管理员</td>
                            <td>2018-01-22</td>
                            <td>已冻结</td>
                            <td><a href="javascript:;">解冻</a></td>
                        </tr>
                        </tbody>
                        <tfoot>
                        <tr>
                            <td>

                            </td>
                        </tr>
                        </tfoot>
                    </table>
                </div>
                <div></div>
            </div>
        </div>
        <div class="changeBox" v-show="hide">
            <div class="change">
                <p class="changeTitle">修改密码</p>
                <a class="close" href="javascript:;">X</a>
            </div>
            <div class="changePw">
                <div>
                    <div class="line"><span><em class="star">*</em>当前密码：</span><input type="text" v-model="oldpwd"></div>
                    <div class="line"><span><em class="star">*</em>新密码：</span><input type="text" v-model="newpwd"></div>
                  <!--<div class="line"><span><em class="star">*</em>当前密码：</span><input type="text" ref="oldpwd"></div>-->
                  <!--<div class="line"><span><em class="star">*</em>新密码：</span><input type="text" ref="newpwd"></div>-->
                    <div class="btn">
                        <button class="agree" @click="submit">确定</button>
                        <button class="cancel" @click="cancel">取消</button>
                    </div>
                </div>
            </div>
        </div>
        <div class="mask" v-show="hide"></div>
    </div>

</template>

<script>
    export default {
        data(){
            return{
                arr:["卓新思创","在线客服","常见问题","安全中心","退出"],
                arr1:["用户管理","课程管理","统计报表","其他管理","数据字典","系统维护"],
              hide:false,
              newpwd:'',
              oldpwd:''
            }
        },
      mounted(){
        document.body.style.background="#fff"
      },
      methods:{
        reset(){
          this.hide=true
        },
        cancel(){
          this.hide=false
        },
        submit(){

          this.$http({
            url: "api/Handler/AdminLogin?action=updatepass",
            method: "post",
            data:{
              newpass:this.newpwd,
              oldpass:this.oldpwd
            }
          }).then((result)=>{
            alert(result.data.success)
          this.$router.push("/")
        })

//          this.$http({
//            url: "api/Handler/AdminLogin?action=updatepass",
//            method: "post",
//            data:{
//              newpass:this.$refs.newpwd.value,
//              oldpass:this.$refs.oldpwd.value
//            }
//          }).then((result)=>{
//            console.log(result);
//          this.$router.push("/")
//        })

        }
      }
    }

</script>

<style scoped>
  .header{
    width:100%;
  }
  .nav{
    background:#262626;
    height:50px;
  }
  .logo{
    display: inline-block;
    width:278px;
    height:100%;
    /*float: left;*/
    overflow: hidden;
  }
  .logo img{
    width:100%;
    height:100%;
  }
  .nav-Right{
    float: right;
    height:100%;
  }
  .selectBox{
    float: right;
  }
  .selectBox li{
    float: left;
    padding:0 20px;
    font-size:14px;
    height:50px;
    line-height:50px;
  }
  .selectBox li a{
    color: #9f9b95;
  }
  .headlogo{
    float: right;
    height:100%;
    margin:0 15px 0 20px;
    /*display: inline-block;*/
  }
  .headlogo a{
    display: inline-block;
    width:100%;
    height:100%;
  }

  .headBottom{
    width:100%;
    height:60px;
    background: linear-gradient(to right,#242f5d,#455d97);
  }
  .headBottom ul{
    margin-left:130px;
  }
  .headBottom ul li{
    float: left;
    padding:0 20px 0 40px;
    height:100%;
    line-height:60px;
  }
  .headBottom ul li a{
    color: #fff;
  }
  .searchBox{
    width:1340px;
    height:45px;
    margin:0 auto;
    padding-top: 10px;
    background:#fff;
    border:1px solid #c5c1bb;
  }
  .routerBox{
    height:50px;
    line-height:50px;
  }
  .router{
    box-sizing: border-box;
    width:100%;
    height:100%;
    padding-left:10px;
  }
  .routerBox .router a{
    color: #75736e;
  }
  .routerBox .router .blue{
    color: #127fd0;
  }
  .search{
    float: left;
    width:100%;
    height:37px;
    /*margin-top: 10px;*/
  }
  .add{
    float: right;
    width:114px;
    height:35px;
    text-align: center;
    line-height: 35px;
    margin-right:20px;
  }
  .add a{
    display: inline-block;
    width:100%;
    height:100%;
    box-sizing: border-box;
    padding-left: 20px;
    color: #fff;
    background:#4664ad;
  }
  .inp{
    width:260px;
    height:33px;
    margin-left:10px;
    text-indent:1em;
    border:1px solid #c5c1bb;
  }
  .submit{
    width:115px;
    height:35px;
    color: #fff;
    background:#1fbb5c;
    border:none;
    outline: none;
  }

  .listTable{
    margin: 0 auto;
    width:1340px;
    border:1px solid #c5c1bb;
    margin-top:15px;
    color: #666460;
  }

  .listTitle{
    width:100%;
    height:37px;
  }
  .titleIcon{
    float: left;
    width:40px;
    height:100%;
    border-right:1px solid #c5c1bb;
    background:url("../../static/img/functional_block.png")no-repeat 7px 7px;
    background-size: 70% 60%;
  }
  .title{
    float: left;
    line-height:37px;
    padding-left:15px;
    box-sizing: border-box;
    font-weight: bold;
  }
  .table table{
    border-top:1px solid #c5c1bb;
    width:100%;
    border-collapse: collapse;
    /*min-height:290px;*/
  }
  .table table thead tr{
    border-bottom:1px solid #c5c1bb;
    height:37px;
    line-height:37px;
    background:#f1efed;
  }
  .table table thead tr th{
    height:36px;
    padding-left:10px;
    border-right:1px solid #c5c1bb;
  }
  .table table tbody tr{
    height:37px;
    line-height:37px;
    border-bottom:1px solid #c5c1bb;
  }
  .table table tbody tr td{
    height:37px;
    line-height:37px;
    color: #000;
    padding-left:10px;
  }
  .table table tbody tr:hover{
    background:#edf5ff;
  }
  .mask{
    position: absolute;
    top:0;
    left:0;
    width:100%;
    height:100%;
    background:rgba(255,255,255,.5);
  }
  .changeBox{
    position: absolute;
    top:100px;
    left:50%;
    margin-left:-240px;
    font-size:14px;
    width:480px;
    height:300px;
    background:#4664ad;
    z-index: 10;
  }
  .changePw{
    width:470px;
    height:260px;
    margin:5px;
    background:#fff;
    box-sizing: border-box;
    overflow: hidden;
  }
  .change{
    width:100%;
    height:30px;
    position: relative;
  }
  .change p{
    float: left;
    line-height: 35px;
    color: #fff;
    margin-left: 5px;
  }
  .change a{
    position: absolute;
    top:5px;
    right:5px;
    display: inline-block;
    width:18px;
    height:18px;
    background:#a4b3d7;
    border-radius: 50%;
    color: #4664ad;
    text-align: center;
    line-height: 18px;
  }
  .changePw .star{
    color: #ac9f92;
    font-style: normal;
  }
  .changePw input{
    border:1px solid #c8c2bb;
    width:298px;
    height:20px;
  }
  .changePw>div{
    margin-top: 40px;
  }
  .line{
    margin:10px auto;
  }
  .line>span{
    color: #2c2d32;
    display: inline-block;
    width:80px;
    text-align: right;
    margin-left:30px;
  }
  .btn{
    width:200px;
    margin:20px auto;
  }
  .btn button{
    width:80px;
    height:30px;
    color: #fff;
    border:none;
    outline: none;
    cursor: pointer;
  }
  .btn .agree{
    background:#46c540;
    margin-right: 30px;
  }
  .btn .cancel{
    background:#4664ad;
  }
</style>


















