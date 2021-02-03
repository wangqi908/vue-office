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
        name: 'home',
        component: () => import(/* webpackChunkName: "home" */ '@/views/home')
      },
      {
        path: 'docx',
        name: 'docx',
        component: () => import(/* webpackChunkName: "docx" */ '@/views/docx')
      },
      {
        path: 'excel',
        name: 'excel',
        redirect: '/excel/export',
        component: () =>
          import(/* webpackChunkName: "excel" */ '@/views/excel'),
        children: [
          {
            path: 'export',
            name: 'excel-export',
            component: () =>
              import(
                /* webpackChunkName: "excel-export" */ '@/views/excel/export'
              )
          },
          {
            path: 'read',
            name: 'excel-read',
            component: () =>
              import(/* webpackChunkName: "excel-read" */ '@/views/excel/read')
          }
        ]
      },
      {
        path: 'pdf',
        name: 'pdf',
        redirect: '/pdf/export-by-element',
        component: () => import(/* webpackChunkName: "pdf" */ '@/views/pdf'),
        children: [
          {
            path: 'export-by-element',
            name: 'pdf-export-by-element',
            component: () =>
              import(
                /* webpackChunkName: "pdf-export-by-element" */ '@/views/pdf/exportByElement'
              )
          },
          {
            path: 'export-by-url',
            name: 'pdf-export-by-url',
            component: () =>
              import(
                /* webpackChunkName: "pdf-export-by-url" */ '@/views/pdf/exportByUrl'
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
  history: createWebHashHistory(),
  routes
})

export default router
