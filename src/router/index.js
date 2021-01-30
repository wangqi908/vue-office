import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'layout',
    redirect: '/home',
    component: () =>
      import(/* webpackChunkName: "layout" */ '@/components/Layout'),
    children: [
      {
        path: 'home',
        name: 'Home',
        component: () =>
          import(/* webpackChunkName: "about" */ '../views/Home.vue')
      },
      {
        path: 'about',
        name: 'About',
        component: () =>
          import(/* webpackChunkName: "about" */ '../views/About.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes
})

export default router
