import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/iransite',
    name: 'IranSite',
    component: () => import(/* webpackChunkName: "iransite" */ '../views/IranSite.vue'),
    meta:{transition:'ts-iransite'}
  },
  {
    path: '/knowledge',
    name: 'Knowledge',
    component: () => import(/* webpackChunkName: "iransite" */ '../views/Knowledge.vue'),
    meta:{transition:'ts-knowledge'}
  },
  {
    path: '/seo',
    name: 'Seo',
    component: () => import(/* webpackChunkName: "seo" */ '../views/Seo.vue'),
    meta:{transition:'ts-seo'}
  },
  {
    path: '/sitedesign',
    name: 'SiteDesign',
    component: () => import(/* webpackChunkName: "seo" */ '../views/SiteDesign.vue'),
    meta:{transition:'ts-sitedesign'}
  },
  {
    path: '/googleadd',
    name: 'GoogleAdd',
    component: () => import(/* webpackChunkName: "seo" */ '../views/GoogleAddwords.vue'),
    meta:{transition:'ts-googleadd'},
    children:[
      {
        path:'site1',
        name:'Site1',
        component: () => import(/* webpackChunkName: "site1" */ '../views/Site1.vue'),
        
      }
    ]
  },
  {
    path: '/crm',
    name: 'crm',
    component: () => import(/* webpackChunkName: "seo" */ '../views/Crm.vue'),
    meta:{transition:'ts-crm'}
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
