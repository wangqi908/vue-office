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
          import(/* webpackChunkName: "home" */ '../views/Home.vue')
      },
      {
        path: 'excel',
        name: 'excel',
        component: () =>
          import(/* webpackChunkName: "excel" */ '../views/excel'),
        redirect: '/excel/export',
        children: [
          {
            path: 'export',
            name: 'export',
            component: () =>
              import(
                /* webpackChunkName: "excel-export" */ '../views/excel/export.vue'
              )
          },
          {
            path: 'read',
            name: 'read',
            component: () =>
              import(
                /* webpackChunkName: "excel-read" */ '../views/excel/read.vue'
              )
          }
        ]
      },
      {
        path: 'docx',
        name: 'docx',
        component: () => import(/* webpackChunkName: "docx" */ '../views/docx')
      },
      {
        path: 'pdf',
        name: 'pdf',
        component: () => import(/* webpackChunkName: "pdf" */ '../views/pdf'),
        redirect: '/pdf/export-by-element',
        children: [
          {
            path: 'export-by-element',
            name: 'exportByElement',
            component: () =>
              import(
                /* webpackChunkName: "pdf-export-by-element" */ '../views/pdf/exportByElement.vue'
              )
          },
          {
            path: 'export-by-url',
            name: 'exportByUrl',
            component: () =>
              import(
                /* webpackChunkName: "pdf-export-by-url" */ '../views/pdf/exportByUrl.vue'
              )
          }
        ]
      }
    ]
  },
  {
    path: '/demo',
    name: 'demo',
    component: () => import(/* webpackChunkName: "demo" */ '../views/demo')
  }
]

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes
})

export default router
