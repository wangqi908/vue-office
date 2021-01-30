import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'layout',
    redirect: '/home',
    component: () =>
      import(/* webpackChunkName: "layout" */ '@/components/layout'),
    children: [
      {
        path: 'home',
        name: 'Home',
        component: () =>
          import(/* webpackChunkName: "about" */ '../views/Home.vue')
      },
      {
        path: 'excel-read',
        name: 'excel-read',
        component: () =>
          import(/* webpackChunkName: "excel-read" */ '../views/ExcelRead.vue')
      },
      {
        path: 'excel-export',
        name: 'excel-export',
        component: () =>
          import(
            /* webpackChunkName: "excel-export" */ '../views/ExcelExport.vue'
          )
      }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes
})

export default router
