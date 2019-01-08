import Vue from 'vue'
import Router from 'vue-router'
import shangpins from '@/components/shangpins'
import fenlei from '@/components/fenlei'
import xiangqingye from '@/components/xiangqingye'
import xiangqing from '@/components/xiangqing'
import pingjia from '@/components/pingjia'
import xiangqingye2 from '@/components/xiangqingye2'
import pinbiao from '@/components/pinbiao'
import fuwuye from '@/components/fuwuye'
import anzhuang from '@/components/anzhuang'
import weixiu from '@/components/weixiu'
import jindu from '@/components/jindu'
import kefu from '@/components/kefu'
import wangdian from '@/components/wangdian'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'shangpins',
      component: shangpins
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
    {
      path:'/fuwuye',
      component:fuwuye
    },
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
