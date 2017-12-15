<template>
  <div class="side">
    <ul class="right_float">
      <li>
        <em @click='conlog($event,["myhead",0])'></em>       
        
            <transition name="scale">
              <div class='side_detail'  v-if='isShow.myhead'>
                <i class="iconfont icon-creditlevelfilling"  ></i>
                
               </div>

             </transition>
          <transition name='move'>
            <div class="side_title" v-if='isShow.myhead'>首页</div>
          </transition>
       
      
      </li>
      <li>
        <em @click='conlog($event,["aboutme",1])'></em>
        <transition name="scale">
                    <div class='side_detail'  v-if='isShow.aboutme'>
                      <i class="iconfont icon-help"  ></i>
                      
                     </div>

                   </transition>
                <transition name='move'>
                  <div class="side_title" v-if='isShow.aboutme'>关于我</div>
                </transition>
             
      </li>
      <li>
        <em @click='conlog($event,["skill",2])'></em>
        <transition name="scale">
                    <div class='side_detail'  v-if='isShow.skill'>
                      <i class="iconfont icon-process"  ></i>
                      
                     </div>

                   </transition>
                <transition name='move'>
                  <div class="side_title" v-if='isShow.skill'>技术栈</div>
                </transition>
             
      </li>
      <li>
        <em @click='conlog($event,["exp",3])'></em>
        <transition name="scale">
                    <div class='side_detail'  v-if='isShow.exp'>
                      <i class="iconfont icon-jifen"  ></i>
                      
                     </div>

                   </transition>
                <transition name='move'>
                  <div class="side_title" v-if='isShow.exp'>经历</div>
                </transition>
             
      </li>
      <li>
        <em @click='conlog($event,["project",4])'></em>
          <transition name="scale">
              <div class='side_detail'  v-if='isShow.project'>
                <i class="iconfont icon-office"  ></i>
                
               </div>

             </transition>
          <transition name='move'>
            <div class="side_title" v-if='isShow.project'>项目</div>
          </transition>
       
      </li>
      <li>
        <em @click='conlog($event,["contact",5])'></em>
         <transition name="scale">
              <div class='side_detail'  v-if='isShow.contact'>
                <i class="iconfont icon-phone"  ></i>
                
               </div>

             </transition>
          <transition name='move'>
            <div class="side_title" v-if='isShow.contact'>联系我</div>
          </transition>
       
      </li>
    </ul>

    
  </div>
</template>
<!-- <style src='../assets/font/iconfont.css'></style> -->
<script>
import '../assets/font/iconfont.css'
  export default {
    name:'side',
    data(){
      return {
          isShow:this.$store.state.isShow,

      }
    },
    methods:{
      conlog(event,str){
        console.log(this.$store.state);
        this.$store.dispatch('actchangeShow',str)
      }
    }
  }
</script>
<style scoped lang="scss">
  .scale-enter,.scale-leave-to{
    transform:scale(0,0);
  }
  .scale-enter-to,.scale-leave{
    transform:scale(1,1);
  }
  .scale-enter-active,.scale-leave-active{
    transition:all 0.5s;

  }
  .move-enter,.move-leave-to{
    transform:translateX(-100%);
    opacity:0;
  }
  .move-enter-active,.move-leave-active{
    transition:all 0.5s;
  }
  .side{
    position: fixed;
    width:24px;
    height:100%;
    z-index:2;
    top:0;
    right:0;
    margin-top: -96px;
    .right_float{
        position: absolute;
        top:50%;
        right:40px;
        height:24px * 6;
        z-index:100;
        li{
          &:before{
            content:'';
            display: table;
            height:0;
            width: 0;
          }
            height:24px;
            list-style:none;
            margin: 12px auto;
            position: relative;
            top: 0;
            left:0;

            em{
              display:block;
              height:12px;
              width:12px;
              background:rgba(0,0,0,.5);
              border-radius: 50%;
              margin-top:6px;
             
            }
            
        }
        i{
          
          height:24px;
          width: 24px;
          background: rgba(6,6,6,1);
          border-radius: 50%;
          position:absolute;
          top:0;
          right:0;
          color:white;
          font:18px/24px '';
          &:before{
            font-size: 18px;
            line-height: 24px;
          }
          
        }
        .side_detail{
          position: absolute;
         top:0;
         height:24px;
         width:24px;
         right:-6px;
         transform-origin:center center;
        
        }
        .side_title{
          position:absolute;
          top:0;
          height:24px;
          width:60px;
          border-radius:3px 0 0 3px;
          background:rgba(6,6,6,1);
          left:-84px;
          color:white;
          font:12px/24px '';
          &::after{
            content:'';
            position:absolute;
            top:0;
            right:-12px;
            border-top: 12px solid transparent;
            border-left: 12px solid rgba(6,6,6,1);
            border-bottom: 12px solid transparent;
          }
        }
    }
  }
</style>