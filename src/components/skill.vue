<template>
  <div class="skill">
    <h1 class="title">技术栈</h1>

    <div class="skill_detail">
      <div id="pie" :style="{width:'400px',height:'400px'}"></div>
      <div class="skill_detail_right">
          <p>擅长使用<span>VUE</span>,<span>REACT</span>等框架进行现代化开发。</p>
          <p>掌握<span>Bootstrap</span>、<span>Element</span>、<span>Antd</span>等前端框架的应用，能够快速实现响应式网页的开发。</p>
          <p>熟练掌握<span>Jquery</span>类库及其插件的使用与开发。</p>
          <p>了解<span>webpack</span>的基本开发配置。</p>
      </div>
    </div>
  </div>
  
</template>
<script>
import echarts from 'echarts'

export default {
  name:'skill',
  data(){
    return {

    }
  },
  mounted(){
   var myChart = echarts.init(document.getElementById('pie'));
       myChart.setOption({
          tooltip: {
              trigger: 'item',
              formatter: "{a} <br/>{b}: {c} ({d}%)"
          },
          color:['#41b883', '#4ad5ff','#0769ad','#4caf50','#4e2449','#00ffff'] ,
          legend: {
              orient: 'vertical',
              x: 'left',
              // data:['VUE','REACT','JQUERY','H5+CSS3','BOOTSTRAP','NODEJS']
          },
            
          series: [
              {
                  name:'访问来源',
                  type:'pie',
                  radius: ['50%', '70%'],
                  avoidLabelOverlap: false,
                  label: {
                      normal: {
                          show: false,
                          position: 'center'
                      },
                      emphasis: {
                          show: true,
                          textStyle: {
                              fontSize: '30',
                              fontWeight: 'bold'
                          }
                      }
                  },
                  label: {
                      normal: {
                          textStyle: {
                              color: 'rgba(255, 255, 255, 0.8)'
                          }
                      }
                  },
                  labelLine: {
                      normal: {
                          show: true
                      }
                  },
                  data:[
                      {value:335, name:'VUE'},
                      {value:310, name:'REACT'},
                      {value:234, name:'JQUERY'},
                      {value:305, name:'H5C3'},
                      {value:100, name:'BS'},
                      {value:200, name:'NODEJS'}
                  ]
              }
          ]
      });

  },
}
</script>
<style scoped lang="scss">
.skill{
  font:44px/55px '';
  width:100%;
  height:100%;
  background: url(../assets/bg.png);
  background-color:  #4d5e8f;
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
  .skill_detail{
    width:800px;
    margin: auto;
    display: flex;
    justify-content:space-between;
    align-items:center;
    #pie{
      background: white;
    }
    .skill_detail_right{
      width:400px;
     font:18px/38px '';
        color:white;
        span{
          color:orange;
        }
    }
  }

}
</style>