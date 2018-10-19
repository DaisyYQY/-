<template>
  <div class="box">
    <div class="header">
      <div class="nav">
        <a class="logo"><img src="../../static/img/3-1.png" alt=""></a>
        <div class="nav-Right">
          <div class="headlogo"><a href="javascript:;"><img src="../../static/img/touxiang.jpg" alt=""></a></div>
          <ul class="selectBox">
            <li v-for="item in arr"><a href="javascript:;">{{item}}</a></li>
            <li @click="exit"><a href="javascript:;">退出</a></li>
          </ul>
        </div>
      </div>
      <div class="headBottom">
        <ul>
          <li v-for="(item,index) in arr1" @click="goto(index)"><a href="javascript:;">{{item}}</a></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data(){
      return{
        arr:["卓新思创","在线客服","常见问题","安全中心"],
        arr1:["用户管理","课程管理"]
      }
    },
    mounted(){
      document.body.style.background="#fff"
    },
    methods: {
      goto(index){
//        console.log(index);
        if (index == 0) {
          this.$router.push("/student")
        } else if (index == 1) {
          this.$router.push("/first")
        }
      },
      exit(){
        var user = localStorage.getItem("userId");
        if(user){

        this.$http({
           url: "api/Handler/AdminHandler?action=quit",
           method: "get"
         }).then((result)=>{
           localStorage.removeItem("userId")
          alert("用户退出成功");
         this.$router.push("/");
       })

       }else{
         alert("用户已退出");
       }

      }
    }


  }


</script>

<style scoped>
  body{
    color:#f7f5f5;
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

</style>


















