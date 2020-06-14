import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Lista',
    component: () => import('../components/Lista.vue')
  },
  {
    path: '/cadastrar',
    name: 'Cadastrar',
    component: () => import('../components/Formulario.vue')
  },
  {
    path: '/visualizar/:id',
    name: 'Visualizar',
    component: () => import('../components/Formulario.vue')
  },
  {
    path: '/editar/:id',
    name: 'Editar',
    component: () => import('../components/Formulario.vue')
  },
  {
    path: '/excluir/:id',
    name: 'Excluir',
    component: () => import('../components/Formulario.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
