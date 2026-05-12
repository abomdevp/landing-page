import { createRouter, createWebHistory } from 'vue-router'
import PaginaInicio from '../paginas/PaginaInicio.vue'
import PaginaProductos from '../paginas/PaginaProductos.vue'
import PaginaDetalle from '../paginas/PaginaDetalle.vue'
import PaginaCarrito from '../paginas/PaginaCarrito.vue'

const routes = [
  { path: '/', component: PaginaInicio },
  { path: '/productos', component: PaginaProductos },
  { path: '/productos/:id', component: PaginaDetalle },
  { path: '/carrito', component: PaginaCarrito }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 }
  }
})

export default router
