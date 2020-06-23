import Vue from 'vue'
import Router from 'vue-router'
import a from '@/components/a'
const pageb = ()=>import('@/components/b');


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'a',
      component: a
    },
	{
       path:'/pageb',
       component: pageb,
       meta: {
         showFooter: true
       }
    }
  ]
})
