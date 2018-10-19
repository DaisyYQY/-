<template>
  <div class="box">
    <div class="loginBox">
      <div class="logo"></div>
      <div class="inp">
        <div class="line"><input type="text" placeholder="用户名" v-model="username"></div>
        <div class="line"><input type="text" placeholder="密码" v-model="password"></div>
        <div class="line"><div class="line1"><input type="text" placeholder="验证码" ref="veri"></div><Veri/></div>
      </div>
      <div class="btn">
        <button class="forget">忘记密码</button>
        <button class="login" @click="login">登录</button>
      </div>
    </div>
  </div>
</template>

<script>
  //ref可以代替父子组件传值
  import Veri from "./veri"
//  import Axios from "axios"
  export default {
    data(){
      return {
        username: '',
        password: '',
        veri:''
      }
    },
    //注册组件
    components: {
      Veri
    },
    methods: {
      login(){
        this.$http({
            url: "api/Handler/AdminHandler?action=checkveri",
            method: "get",
            params: {
              veri:this.$refs.veri.value
            }
          }).then((result)=>{
          if(result.data.success=="验证码正确"){
          this.next();
          }else{
          alert(result.data.success);
        }
//          console.log(result);
          })
      },
      next(){
        this.$http({
          url: "api/Handler/AdminLogin?action=login",
          method: "post",
          data: {
            username:this.username,
            password:this.password
          }
        }).then((result)=>{

          var userId=result.data.tokenId;
          var uu=localStorage.getItem("userId");

        if(result.data.success=="welcome "+this.username+",登录成功"){
//          if(uu!=userId){
              this.$router.push("/rpw");
              localStorage.setItem("userId", userId);
//          }else{
//            alert("用户已登录");
//          }
        }else if(result.data.success){
          alert(result.data.success);
        }


          })

      }
    },
    mounted(){
      document.body.style.background="#09194d"
    }
  }

  //下载m i element-ui --save
  // 1、校验验证码
  // 2、登录
  // 3、退出登录

  /*
1.在main.js里引入axios，在methods里通过
this.$http({
 url: "api/Handler/AdminHandler?action=veri",
 method: "get",
 params: {

 }
 }).then(function (result) {
 console.log(result);
 })

 2.node解决跨域问题
 res.header('Access-Control-Allow-Origin', '*');
 //响应头权限
 res.header('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild');
 //方式
 res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');

 3.config/index.js  解决跨域问题
 proxyTable: {   //解决跨域问题
 '/api': {
 target: 'http://127.0.0.1:8080', // 你接口的域名
 changeOrigin: true,     // 如果接口跨域，需要进行这个参数配置
 pathRewrite: {
 '^/api': 'http://127.0.0.1:8080' //路径重写
 }
 }
 }

 4.运行node和vue
 npm start   npm run dev

 5.http://localhost:8081   点击提交，出现数据result
 */
</script>

<style scoped>
  .box{
    width:100%;
    height:100%;
    position: relative;
    background:#09194d;
  }
  .loginBox{
    width:650px;
    height:540px;
    margin:0 auto;
    overflow:hidden;
  }
  .logo{
    width:530px;
    height:100px;
    margin: 100px auto;
    margin-bottom:37px;
    background:url("../../static/img/logo.jpg");
  }

  .inp{
    width:600px;
    height:250px;
    margin:0 auto;
  }
  .line{
    width:563px;
    height:45px;
    border:1px solid #ff632c;
    position: relative;
  }
  .line:nth-child(2){
    margin:20px 0;
  }
  .line:nth-child(3){
    border:none;
  }
  .line1{
    display: inline-block;
    width:435px;
    border:1px solid #ff632c;
  }
  .line input{
    margin-left:60px;
    background: transparent;
    width:375px;
    height:100%;
    box-sizing: border-box;
    border-left:1px solid #ff632c;
    text-indent:1em;
  }

  .btn{
    width:100%;
    margin:0 auto;
  }
  .btn button{
    width:110px;
    height:30px;
    border:none;
    outline:none;
    cursor: pointer;
  }
  .btn .forget{
    float: left;
    background:#00afce;
  }
  .btn .login{
    float: right;
    background:#65ff2f;
  }
  .line1{
    height:45px;
  }
</style>
















