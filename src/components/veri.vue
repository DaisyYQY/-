<template>
  <div class="veriPic">
    <canvas id="canvas" width="100" height="34" @click="change"></canvas>
  </div>
</template>

<script>
  /*
   验证码
   1.canvas创建画布
   1.1获取元素  documentgetElementById()
   1.2绘制绘图环境   ctx.getContext('2d')
   2.绘制矩形  定义宽高  背景颜色
   3.绘制文字
   4.绘制小点  circle
   5.绘制干扰线  line
   6旋转画布
   */
  export default {
    data(){
      return{
        canvas:'',
        width:'',
        height:'',
        ctx:''
      }
    },
    methods:{
      randomNum(min,max){
        return Math.ceil(Math.random()*(max-min)+min)
      },
      randomColor(min,max){
        var r=this.randomNum(min,max)
        var g=this.randomNum(min,max)
        var b=this.randomNum(min,max)
        return 'rgb('+r+','+g+','+b+')'
      },
      drawpic(){
          this.$http({   //用this.$http就可以不在上面引入axios，import Axios from "axios"
            url: "api/Handler/AdminHandler?action=veri",
            method: "get"
          }).then((result)=>{
            var data=result.data.success;
        console.log(data)
            this.getpic(data);
          })
      },
      getpic(result){
        this.canvas = document.getElementById('canvas');
        this.ctx = this.canvas.getContext('2d');
        this.width = this.canvas.width;
        this.height = this.canvas.height;
        this.ctx.fillStyle = this.randomColor(50, 255);
        this.ctx.rect(0, 0, this.width, this.height);
        this.ctx.fillRect(0, 0, this.width, this.height);
        this.ctx.stroke();
        //绘制小点
        for (var i = 0; i < 50; i++) {
          this.ctx.beginPath();
          this.ctx.arc(this.randomNum(0, 100), this.randomNum(0, 34), .5, 2 * Math.PI, false);
          this.ctx.strokeStyle = this.randomColor(50, 255);
          this.ctx.closePath();
          this.ctx.stroke();
        }

//绘制文字
//        var str="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
        for (var i = 0; i <result.length; i++) {
//          var deg=this.randomNum(-30,30);
          var x=15*i+this.randomNum(15,20);
          var y=this.randomNum(0,10);
//          var text=str[this.randomNum(0,str.length-1)];
          this.ctx.fillStyle = this.randomColor(50, 255);
          this.ctx.font = "bold "+this.randomNum(15,30)+"px"+" Arial";
          this.ctx.textBaseline="top";
          this.ctx.fillText(result[i], x,y, 100);
          this.ctx.closePath();
        }

//绘制干扰线
        for (var i = 0; i < 4; i++) {
          this.ctx.beginPath();
          this.ctx.moveTo(this.randomNum(0,100),this.randomNum(0,34));
          this.ctx.lineTo(this.randomNum(0,100),this.randomNum(0,34));
          this.ctx.strokeStyle = this.randomColor(50, 255);
          this.ctx.stroke();
          this.ctx.closePath();
        }
      },
      change(){
        this.drawpic()
      }
    },
    mounted(){
      this.drawpic()
    }
  }
</script>

<style>
.veriPic{
  display: inline-block;
  position: absolute;
  right:0;
  top:6px;
}
</style>
