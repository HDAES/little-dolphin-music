import { createWebHistory, RouteRecordRaw } from 'vue-router'
import type { App } from 'vue'
//import Layout from '@/layouts/default/index.vue'
import { createRouter } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('@/views/index.vue')
  }
]

export const router = createRouter({
  history: createWebHistory(),
  routes
})

export function setupRouter(app: App<Element>) {
  app.use(router)
}
