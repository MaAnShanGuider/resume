<template>
  <div class="index" @mousewheel='changePage($event)' @DOMMouseScroll='changePageTwo($event)'>


 <template>
    <transition name='up' mode='out-in'>
     <template v-if='isShow.myhead'>
      <my-head></my-head>
    </template>
  
  
    <template v-else-if='isShow.aboutme'>
      <my-aboutme></my-aboutme>
    </template>
  
  
    <template v-else-if='isShow.contact'>
      <my-contact></my-contact>
    </template>
  
  
    <template v-else-if='isShow.exp'>
      <my-exp></my-exp>
    </template>
  
  
    <template v-else-if='isShow.project'>
      <my-project></my-project>
    </template>
  
  
    <template v-else-if='isShow.skill'>
      <my-skill></my-skill>
    </template>
  </transition>
  
    </template>
 


<my-side></my-side>
</div>
</template>

<script>
import aboutme from './aboutme'
import myhead from './myhead'
import contact from './contact'
import exp from './exp'
import project from './project'
import skill from './skill'
import side from './side'

const componentsArr = ['myhead','aboutme','skill','exp','project','contact'];
export default {
  name: 'index',
  data () {
    return {
      isShow: this.$store.state.isShow,
      // upOrdown:this.$store.state.page.upOrdown,
      page:this.$store.state.page,
    }
  },
  mounted(){

  },
  methods:{
    changePage($event){
      //console.log($event.wheelDelta);//--在这里进行判断，向下滚:-120   向上滚: 120
      let direction = $event.wheelDelta;

      if(direction>0){
        //------向上滚
        //--判断当前页面,如果为第一页myhead
        if(this.page.nowPage == 0){
          //---不执行任何操作
        }
        else{
          this.page.nowPage = this.page.nowPage - 1;
        }
      }
      else{
        if(this.page.nowPage == 5){

        }
        else{
          this.page.nowPage = this.page.nowPage + 1;
        }
      }
      let np = this.page.nowPage;
      let newData = [componentsArr[this.page.nowPage],np];
      this.$store.dispatch('actionsPage',newData);
    },
    //----兼容火狐浏览器
    changePageTwo($event){
      //console.log($event.wheelDelta);//--在这里进行判断，向下滚:-120   向上滚: 120
      let direction = $event.detail;

      if(direction<0){
        //------向上滚
        //--判断当前页面,如果为第一页myhead
        if(this.page.nowPage == 0){
          //---不执行任何操作
        }
        else{
          this.page.nowPage = this.page.nowPage - 1;
        }
      }
      else{
        if(this.page.nowPage == 5){

        }
        else{
          this.page.nowPage = this.page.nowPage + 1;
        }
      }
            // console.log(this.page.nowPage);
      let np = this.page.nowPage;
      let newData = [componentsArr[this.page.nowPage],np];
      this.$store.dispatch('actionsPage',newData);
    },
  },
  computed:{
    myCom(){
      let xixihaha = this.isShow ;
      return xixihaha;
    },
  },
  components:{

    'my-head':myhead,
    'my-aboutme':aboutme,
    'my-contact':contact,
    'my-exp':exp,
    'my-project':project,
    'my-skill':skill,
    'my-side':side,
  }
}
</script>


<style scoped lang='scss'>
.index{

  width:100%;
  height:100%;
  position:relative;
  top:0;
  left:0;
}

.up-enter,.up-leave-to{
  transform:translateX(-100%);
}
.up-enter-active,.up-leave-active{
  transition:all 0.3s;
}



</style>
