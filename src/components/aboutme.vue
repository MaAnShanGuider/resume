<template>
  <div class="about">
    <h1 class="title">关于我</h1>

    <ul class="pie">
      <li>
        <div>
         <i class="iconfont icon-agriculture"></i>
        </div>
        <span>年龄/23岁</span>
      </li>
        <li>
        <div>
         <i class="iconfont icon-color"></i>
        </div>
        <span>学历/本科</span>
      </li>
        <li>
        <div>
         <i class="iconfont icon-map"></i>
        </div>
        <span>坐标/杭州</span>
      </li>
        <li>
        <div>
         <i class="iconfont icon-machinery"></i>
        </div>
        <span>状态/待就业</span>
      </li>
    </ul>

   <p class="introduce">我叫王永</p>
   <p class="introduce">邮箱:2388540124@163.com</p>
   <p class="introduce">前端工作经验一年半</p>
   <p class="introduce">熟练使用VUE,REACT等MV*框架的开发，掌握nodejs后台，熟练使用jquery，</p>
   <p class="introduce">学习能力很强，写代码追求极致高效</p>
  </div>
</template>
<!-- <style src='@/assets/font/iconfont.css'></style> -->
<script>
  import '@/assets/font/iconfont.css'
  export default {
    name:'about',
    data(){
      return {

      }
    }
  }
</script>
<style scoped lang="scss">
   .about{
  font:44px/55px '';
  width:100%;
  height:100%;
  background: url(../assets/bg.png);
  background-color:  #109085;
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
  .pie{
    width:800px;
    display: flex;
    justify-content:space-around;
    list-style:none;
    margin:0 auto;
    margin-bottom: 34px;
    li{
        height:144px;
        color:white;
        div{
          width:90px;
          height:90px;
          margin:0 auto;
          border-radius:50%;
          background: rgba(39,153,143,1);
          transition:all .3s;
          position: relative;
          i{
            display: block;
            font:40px/90px '';
            &::before{
                font-size: 40px;
                line-height: 90px;
            }
          }
          &::before{
            content:'';
            position: absolute;
            top:0;
            left:0;
            
            height:90px;
            width: 90px;
            transform-origin:center center;
            border-radius: 50%;
            box-shadow: 0 0 5px rgba(255,255,255,.5);
            z-index:-1;
             transition:all .8s;

          }
          &:hover{
            transform:scale(0.9,0.9);
            background:  rgba(35,148,138,1);
            &::before{
              transform:scale(1.5,1.5);
              opacity: 0;
            }
          }
        }

        span{
          display: block;
          width:100px;
          height:24px;
          font:18px/24px '';
          margin-top:20px;

        }
    }

  }
 .introduce{
    font:18px/38px '';
    color:white;
    a{
      color:#ff003e;
    }
  }
}
</style>