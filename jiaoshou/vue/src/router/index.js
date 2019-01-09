import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import login from '@/components/login'
import register from '@/components/register'
import Home from '@/components/Home'
import About from '@/components/About'
import Other from '@/components/Other'
import Me from '@/components/Me'
import Detail from '@/components/Detail'
import Set from '@/components/set'
import kongzhi from '@/components/kongzhi'
import changjing from '@/components/changjing'
import MyShop from '@/components/MyShop'
import MyDevice from '@/components/MyDevice'
import HelpCenter from '@/components/HelpCenter'
import SheZhi from '@/components/SheZhi'
import Mydingdan from '@/components/Mydingdan'

import shangpins from '@/components/shangpins'

//商品页
import fenlei from '@/components/fenlei'
import xiangqingye from '@/components/xiangqingye'
import xiangqing from '@/components/xiangqing'
import pingjia from '@/components/pingjia'
import xiangqingye2 from '@/components/xiangqingye2'
import pinbiao from '@/components/pinbiao'


//服务页
import fuwuye from '@/components/fuwuye'
import anzhuang from '@/components/anzhuang'
import weixiu from '@/components/weixiu'
import jindu from '@/components/jindu'
import kefu from '@/components/kefu'
import wangdian from '@/components/wangdian'


Vue.use(Router)

export default new Router({
  routes:[
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
      redirect:"/home",  //打开localhost:8080的默认页面
      children:[
	    	{
	    		path:'/home',
		    	component:Home
		    },
		    {
	    		path:'/about',
		    	component:About
		    },
		    
		    {
		    	path:'/other',
		    	component:Other
		    },
		    {
		    	path:'/me',
		    	component:Me
		    },
		    {
		    	path:'/shangpins',
		    	component:shangpins
				},
				{
					path:'/fuwuye',
					component:fuwuye
				}, 
		    
    	]
  
    },
    
    {
	    path:'/register',
		  component:register
		},
		{
		  path:'/login',
		  component:login
		},
		{
		   path:'/detail',
		   component:Detail
		},
		{
		   path:'/set',
		   component:Set
		},
		{
		   path:'/kongzhi',
		   component:kongzhi
		},
		{
		   path:'/changjing',
		   component:changjing
		},
    {
		   path:'/MyShop',
		   component:MyShop
		},
		{
		   path:'/MyDevice',
		   component:MyDevice
		},
		{
		   path:'/HelpCenter',
		   component:HelpCenter
		},
		{
		   path:'/SheZhi',
		   component:SheZhi
		},
		{
		   path:'/Mydingdan',
		   component:Mydingdan
		},
		
		
		
		
		{
      path:'/fenlei',
      component:fenlei
    },
    {
      path:'/xiangqingye',
      redirect:'/xiangqingye2',
      component:xiangqingye,
      children:[
        {
          path:'/xiangqingye2',
          component:xiangqingye2
        },
        {
          path:'/xiangqing',
          component:xiangqing
        },
        {
          path:'/pingjia',
          component:pingjia
        },
      ]
    },
    {
      path:'/pinbiao',
      component:pinbiao
    },
    
		// 服务页
		
    {
      path:'/jindu',
      component:jindu
    },
    {
      path:'/weixiu',
      component:weixiu
    },
    {
      path:'/anzhuang',
      component:anzhuang
    },
    {
      path:'/wangdian',
      component:wangdian
    },
    {
      path:'/kefu',
      component:kefu
    },
   
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
  ]
})
