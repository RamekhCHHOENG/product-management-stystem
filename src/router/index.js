import Vue from 'vue'
import Router from 'vue-router'
import Products from '@/components/Products'
import About from '@/components/About'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Products',
      component: Products
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/product',
      name: 'Products',
      component: Products
    }
  ]
})
