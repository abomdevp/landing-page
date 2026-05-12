<template>
  <div class="pagina-productos">
    <section class="catalogo">
      <div class="container">
        <h1>Nuestro Catálogo de Suculentas</h1>
        <div class="grid-productos">
          <div v-for="producto in productos" :key="producto.id" class="tarjeta-producto">
            <img :src="producto.imagen" :alt="producto.nombre" class="img-tarjeta" />
            <div class="info-tarjeta">
              <h3>{{ producto.nombre }}</h3>
              <p class="precio">${{ producto.precio.toLocaleString() }}</p>
              <p class="desc-corta">{{ producto.descripcionCorta }}</p>
              <router-link :to="'/productos/' + producto.id" class="btn-seleccionar">Seleccionar</router-link>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { productos } from '../datos/productos'
</script>

<style scoped>
.pagina-productos {
  padding-top: 6rem;
}

h1 {
  text-align: center;
  margin-bottom: 3rem;
  color: var(--primary-green);
}

.grid-productos {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 2rem;
}

.tarjeta-producto {
  background: white;
  border-radius: var(--border-radius);
  box-shadow: var(--shadow);
  overflow: hidden;
  transition: transform 0.3s;
}

.tarjeta-producto:hover {
  transform: translateY(-5px);
}

.img-tarjeta {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

.info-tarjeta {
  padding: 1.5rem;
  text-align: center;
}

.precio {
  font-weight: 800;
  color: var(--primary-green);
  font-size: 1.2rem;
  margin: 0.5rem 0;
}

.desc-corta {
  font-size: 0.9rem;
  color: var(--text-light);
  margin-bottom: 1.5rem;
  height: 3rem;
}

.btn-seleccionar {
  display: block;
  background: var(--primary-green);
  color: white;
  text-decoration: none;
  padding: 0.8rem;
  border-radius: 8px;
  font-weight: 600;
  transition: background 0.2s;
}

.btn-seleccionar:hover {
  background: #3e5636;
}
</style>
