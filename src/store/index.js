import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const mutations={
		changeShow(context,str){
			/*console.log(context);
			console.log(this);*/
			for(let a in context.isShow){
				if(a != str[0]){
					context.isShow[a] = false;

				}
			}
			if(str[1]>=context.page.nowPage){
				context.page.upOrdown = true;  //-为true向下滚动
			}
			else{
				context.page.upOrdown = false;  //---为false向上滚动
			}
			context.page['nowPage']=str[1];
			context.isShow[str[0]] = true;
		},
		changePage(context,data){
			for(let a in context.isShow){
				if(context.isShow[a] !== data[0]){
					context.isShow[a] = false;
				}
			}
			context.page.nowPage = data[1]; //--将即将要渲染的页面重新赋值给nowPage
			context.isShow[data[0]] = true;
		}

	};

const actions = {
		actchangeShow(context,str){
			/*console.log(this);
			console.log(context,str);*/
			context.commit('changeShow',str);
		},
		actionsPage(context,data){

			context.commit('changePage',data);
		}
	};

const store = new Vuex.Store({
	state:{
		name:'Jack',
		isShow:{myhead:true,aboutme:false,skill:false,exp:false,project:false,contact:false},
		page:{upOrdown:true,nowPage:0,},

	},
	getters:null,
	actions,
	mutations,

});

export default store;