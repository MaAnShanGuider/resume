<template>
  <div class="contact">
    <div class="title">联系我</div>
    <table class="contact_detail">
      <tr>
        <td>手机:</td>
        <td>13486039078</td>
      </tr>
      <tr>
        <td>邮箱:</td>
        <td>2388540124@qq.com</td>
      </tr>
      <tr>
        <td>github:</td>
        <td><a href="https://github.com/MaAnShanGuider" target="_blank">https://github.com/MaAnShanGuider</a></td>
      </tr>
    </table>
  </div>
</template>
<script>
  
  export default {
    name:'contact',
    data(){
      return {

      }
    }
  }
</script>

<style scoped lang="scss">
   .contact{
  font:44px/55px '';
  width:100%;
  height:100%;
  background: url(../assets/bg.png);
  background-color: #a29971;
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
  .contact_detail{
    width:800px;
    font:16px/24px '';
    color:white;
    margin:auto;
    text-align: left;
    td{
      width:400px;
    }
  }
}
</style>