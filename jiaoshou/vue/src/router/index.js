import Vue from 'vue'
import Router from 'vue-router'
import shangpins from '@/components/shangpins'
import fenlei from '@/components/fenlei'
import xiangqingye from '@/components/xiangqingye'
import xiangqing from '@/components/xiangqing'
import pingjia from '@/components/pingjia'
import xiangqingye2 from '@/components/xiangqingye2'
import pinbiao from '@/components/pinbiao'


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
    }
  ]
})
