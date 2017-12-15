<template>
  <div class="project">
    <div class="title">项目</div>
    <ul class="project_main">
      <li>
        <a href="https://github.com/MaAnShanGuider/acfun" target="_blank">VUE全家桶仿acfun移动端项目</a>
        <div>
          <img src="../assets/vue.gif" alt="">
          <p>技术栈:Vue+Vue-Router+Vuex+Webpack+fetch+flex布局</p>
        </div>
      </li>
      <li>
        <a href="https://github.com/MaAnShanGuider/react-"  target="_blank">REACT全家桶仿杉果商城</a>
        <div>
          <img src="../assets/react.gif" alt="">
          <p>技术栈:React+React-Router+React-Redux+Webpack</p>
        </div>
      </li>
      <li>
        <a href="https://github.com/MaAnShanGuider/weixinbot-dami"  target="_blank">nodejs微信机器人</a>
        <div>
          <img src="../assets/bianxin.jpg" alt="">
          <p>技术栈:nodejs+nodemailer+superagent+xml2js</p>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
  
  export default {
    name:'project',
    data(){
      return {

      }
    },
  }
</script>
<style scoped lang="scss">
   .project{
  font:44px/55px '';
  width:100%;
  height:100%;
  background: url(../assets/bg.png);
  background-color:  #44aa55;
  position:relative;
   &::before{
    content:'';
    display: table;
    height:0;
    width:0;
  }
    .title{
    text-align: center;
    font:24px/48px '';
    color:white;
    margin: 60px auto;

  }
  .project_main{
    margin-top: 16px;
    width:900px;
    list-style:none;
    display: flex;
    justify-content:center;
    flex-wrap:nowrap;
    margin: auto;

    li{
     
      width:300px;
      a{
        color:white;
        display: block;
        font:16px/22px '';
        margin-bottom: 12px;
      }
      img{
        width:180px;
        height:320px;
        display: block;
        margin: auto;
      }
      p{
        font:14px/20px '';
        text-align: left;
        word-break:break-all;
        padding:10px;
      }
  
    }

  }
}
</style>