<template>
  <div>
      <ul>
        <li @click="quit">退出</li>
        <li>{{username}}</li>
      </ul>
  </div>
</template>

<script>
  export default {
    data(){
      return {
        username:''
      }
    },
    methods: {
      getInfo(){

        this.$http({
          url: "api/Handler/AdminHandler?action=returninfo",
          method: "get"
        }).then((result)=>{
          localStorage.setItem("username",result.data.success.name)
        this.username=result.data.success.name;
      })


      },
      quit(){
        this.$http({
          url: "api/Handler/AdminHandler?action=quit",
          method: "get"
        }).then((result)=>{
        this.$router.push("/")
        localStorage.clear();
      })

      }
    },
    mounted(){
      document.body.style.background="#fff"

//      console.log(localStorage.username);
var uName=localStorage.getItem("username");
      if(!uName){
        if(!localStorage.username){
          this.getInfo();
        }else{
          this.$router.push("/")
        }
      }else{
        this.getInfo();
      }

    }
  }


</script>

<style scoped>

</style>


















