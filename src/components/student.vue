<template>
    <div class="box">
      <div class="tips">
          <div class="header">
            <div class="nav">
              <a class="logo"><img src="../../static/img/3-1.png" alt=""></a>
              <div class="nav-Right">
                <div class="headlogo"><a href="javascript:;"><img src="../../static/img/touxiang.jpg" alt=""></a></div>
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
                              <a class="first" href="javascript:;"></a>
                              <a class="prev" href="javascript:;"></a>
                              <span>跳转到第</span>
                              <input type="number" value="1">
                              <span>页</span>
                              <a class="Go" href="javascript:;">Go</a>
                              <span>/共3页【7条】</span>
                              <a class="next" href="javascript:;"></a>
                              <a class="last" href="javascript:;"></a>
                              <span>1-3</span>
                            </td>
                        </tr>
                        </tfoot>
                    </table>
                </div>
                <div></div>
            </div>
        </div>
    </div>
</template>

<script>
//  import Item from "../components/item"
    export default {
//      components:{Item},
        data(){
              return{
                arr:["卓新思创","在线客服","常见问题","安全中心","退出"],
                arr1:["用户管理","课程管理","统计报表","其他管理","数据字典","系统维护"]
              }
        }
    }

</script>

<style scoped>
  body{
    color:#f7f5f5;
    width:100%;
  }
  #app{
    width:100%;
  }
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
    position: relative;
  }
  .add:before{
    content:'';
    display: inline-block;
    width:20px;
    height:20px;
    position: absolute;
    background:url("../../static/img/6.png")no-repeat;
    left:28px;
    top:9px;
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
    width:20%;
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
  tfoot tr{
    width:100%;
    height:35px;
    line-height:35px;

  }
  tfoot tr td a{
    position: relative;
    top:7px;
    width:24px;
    height:24px;
    margin-left:10px;
    display: inline-block;
    border:1px solid #e4e1dc;
    line-height:24px;
  }
  tfoot tr td .Go{
    top:0;
    text-align: center;
    color: #262626;
  }
  tfoot tr td input{
    width:58px;
    height:22px;
    border:1px solid #e4e1dc;
  }
  .first{
    background:url("../../static/img/first.png");
    background-size:cover;
  }
  .last{
    background:url("../../static/img/last.png");
    background-size:cover;
  }
  .prev{
    background:url("../../static/img/prev.png");
    background-size:cover;
  }
  .next{
    background:url("../../static/img/next.png");
    background-size:cover;
  }
  .table table tbody tr td a{
    display: inline-block;
    margin-right:10px;
  }
  .table{
    min-height:300px;
    position: relative;
  }
  tfoot{
    position: absolute;
    bottom:0;
    left:0;
    width:100%;
    border-top:1px solid #c5c1bb;
  }
</style>


















