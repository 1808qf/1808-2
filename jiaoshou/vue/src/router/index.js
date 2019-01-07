import Vue from 'vue'
import Router from 'vue-router'
import shangpins from '@/components/shangpins'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'shangpins',
      component: shangpins
    }
  ]
})
