<template>
  <nav class="navbar">
    <router-link to="/" class="logo">Suculenta Echeveria</router-link>
    <div class="links">
      <router-link to="/productos">Productos</router-link>
      <a href="#beneficios" v-if="$route.path === '/'">Beneficios</a>
      <a href="#faq" v-if="$route.path === '/'">FAQ</a>
      <router-link to="/carrito" class="btn-carrito">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg>
        <span v-if="carrito.totalItems > 0" class="badge">{{ carrito.totalItems }}</span>
      </router-link>
    </div>
  </nav>
</template>

<script setup>
import { useCarritoStore } from '../almacenes/useCarrito'
const carrito = useCarritoStore()
</script>

<style scoped>
.btn-carrito {
  display: flex;
  align-items: center;
  position: relative;
  background: var(--light-green);
  padding: 0.5rem;
  border-radius: 50%;
  color: var(--primary-green) !important;
}

.badge {
  position: absolute;
  top: -8px;
  right: -8px;
  background: #e74c3c;
  color: white;
  font-size: 0.7rem;
  font-weight: 800;
  width: 18px;
  height: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  border: 2px solid white;
}

.navbar {
  position: fixed;
  top: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem 10%;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(5px);
  z-index: 1000;
  box-shadow: 0 2px 10px rgba(0,0,0,0.05);
}

.logo {
  font-weight: 800;
  font-size: 1.2rem;
  color: var(--primary-green);
  text-decoration: none;
}

.links {
  display: flex;
  align-items: center;
  gap: 2rem;
}

.links a {
  text-decoration: none;
  color: var(--text-dark);
  font-weight: 500;
  font-size: 0.9rem;
  transition: color 0.2s;
}

.links a:hover {
  color: var(--primary-green);
}

@media (max-width: 600px) {
  .links {
    display: none;
  }
}
</style>
