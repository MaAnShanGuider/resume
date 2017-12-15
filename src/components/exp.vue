<template>
  <div class="exp">
        <h1 class="title">经历</h1>
        <div class="exp_detail">
          <div class="exp_detail_main">
            <template v-if='isShow'>
              <div>
                  <h1>宁波愉阅网络科技有限公司</h1>
                  <p>2016.07~2017.10</p>
                  <p>负责网站的页面开发以及更新，还有后台合作实现用户登录注册之类的功能模块。</p>
                  <a href="https://www.joy-read.com/application/platform" target='_blank'>项目地址</a>
                  <ul>
                    <li>根据业务需求设计合适的工程项目</li>
                    <li>高度组件化、模块化思维，拥有各平台调试能力</li>
                    <li>同期学习ES6及vue,react,体会函数式编程思想</li>
                  </ul>

            </div>

              </template>
             <template v-else>
              <div>
                <h1>大三期间</h1>
                <p>2015.08~2016.05</p>
                <p>负责学校公众微信号的开发及维护，对前端技术产生了浓厚的兴趣</p>
                <ul>
                  <li>在此期间，自学html+css,初步接触网页布局</li>
                  <li>中后期，自学javascript以及jq，会基本的网页布局以及特效</li>
                  <li>开始涉及前端现代开发框架</li>
                </ul>

              </div>
            </template>
           
          </div>
          <ul class="exp_detail_sub">
            <li @click='changeTag($event,1)' :class="{bg:isShow}"></li>
            <li @click='changeTag($event,2)' :class="{bg:!isShow}"></li>
          </ul>
        </div>
  </div>
</template>
<script>
  
  export default {
    name:'exp',
    data(){
      return {
          isShow:true,
      }
    },
    methods:{
      changeTag($event,data){
          if(data === 1){
            this.isShow = true;
          }
          else{
            this.isShow = false;
            console.log( this.isShow);
          }
      }
    }
  }
</script>
<style scoped lang="scss">

   .exp{
  width:100%;
  height:100%;
  background: url(../assets/bg.png);
  background-color: #945c4c;
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
 .exp_detail{
  width:800px;
  margin: 26px auto 0 auto;
  .exp_detail_main{
    width:700px;
    height:300px;
    padding-left:100px;
    border-radius:10px;
    background: #eee;
    box-shadow: 0 0 15px black; 
    overflow: hidden; 
    text-align: left;

    h1{
      color:orange;
      
      margin-top: 20px;
      margin-bottom: 10px;
    }
    p{
      color:#c15d2b;
      font:14px/22px '';
    }

  }
  .exp_detail_sub{
    display: flex;
    justify-content:center;
    height:40px;
    align-items:center;
    list-style: none;
    li{
      width:14px;
      height:14px;
      background: rgba(0,0,0,.5);
      border-radius: 50%;
      margin:0 14px;
      &.bg{
  background: rgba(233,233,233,.8);
      }
    }
  }
 }
}
</style>