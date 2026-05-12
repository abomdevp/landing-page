<template>
  <div class="pagina-detalle" v-if="producto">
    <div class="container">
      <div class="detalle-wrapper">
        <div class="imagen-lado">
          <img :src="producto.imagen" :alt="producto.nombre" class="img-grande" />
        </div>
        <div class="info-lado">
          <span class="sku">ID: {{ producto.id }}</span>
          <h1>{{ producto.nombre }}</h1>
          <p class="especie"><em>{{ producto.especie }}</em></p>
          <div class="precio-grande">${{ producto.precio.toLocaleString() }}</div>
          <p class="descripcion-larga">{{ producto.descripcionLarga }}</p>
          
          <div class="controles-compra">
            <div class="stock-info" :class="{ 'bajo-stock': producto.stock < 5 }">
              Stock disponible: {{ producto.stock }} unidades
            </div>
            <div class="selector-cantidad">
              <label>Cantidad:</label>
              <input type="number" v-model.number="cantidad" min="1" :max="producto.stock" />
            </div>
            <button @click="handleAgregar" class="btn-primary" :disabled="cantidad > producto.stock">
              Agregar al Carrito
            </button>
            <p v-if="errorStock" class="error">{{ errorStock }}</p>
            <p v-if="agregadoExito" class="exito">¡Producto añadido al carrito!</p>
          </div>
          
          <router-link to="/productos" class="btn-ver-mas">Ver más Productos</router-link>
        </div>
      </div>
    </div>
  </div>
  <div v-else class="pagina-error">
    <div class="container">
      <h1>Producto no encontrado</h1>
      <router-link to="/productos" class="btn-primary">Volver al Catálogo</router-link>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { productos } from '../datos/productos'
import { useCarritoStore } from '../almacenes/useCarrito'

const route = useRoute()
const carrito = useCarritoStore()
const producto = computed(() => productos.find(p => p.id === route.params.id))

const cantidad = ref(1)
const agregadoExito = ref(false)
const errorStock = ref('')

function handleAgregar() {
  errorStock.value = ''
  agregadoExito.value = false
  
  if (cantidad.value > producto.value.stock) {
    errorStock.value = `Solo quedan ${producto.value.stock} unidades disponibles.`
    return
  }

  const exito = carrito.agregarProducto(producto.value, cantidad.value)
  if (exito) {
    agregadoExito.value = true
    setTimeout(() => agregadoExito.value = false, 3000)
  } else {
    errorStock.value = 'No hay suficiente stock considerando lo que ya tienes en el carrito.'
  }
}
</script>

<style scoped>
.pagina-detalle {
  padding-top: 8rem;
  padding-bottom: 5rem;
}

.detalle-wrapper {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
}

.img-grande {
  width: 100%;
  border-radius: var(--border-radius);
  box-shadow: var(--shadow);
}

.sku {
  font-size: 0.8rem;
  color: #999;
}

h1 {
  font-size: 3rem;
  color: var(--primary-green);
  margin: 0.5rem 0;
}

.especie {
  color: var(--accent-green);
  font-size: 1.1rem;
  margin-bottom: 1rem;
}

.precio-grande {
  font-size: 2.5rem;
  font-weight: 800;
  margin: 1.5rem 0;
}

.descripcion-larga {
  color: var(--text-light);
  font-size: 1.1rem;
  margin-bottom: 2rem;
}

.controles-compra {
  background: #f9f9f9;
  padding: 2rem;
  border-radius: 12px;
  margin-bottom: 2rem;
}

.stock-info {
  font-size: 0.9rem;
  margin-bottom: 1rem;
  color: #666;
}

.bajo-stock {
  color: #e67e22;
  font-weight: 700;
}

.selector-cantidad {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.5rem;
}

.selector-cantidad input {
  width: 60px;
  padding: 0.5rem;
  border: 1px solid #ddd;
  border-radius: 4px;
}

.btn-primary {
  width: 100%;
  font-size: 1.1rem;
}

.error {
  color: #e74c3c;
  margin-top: 1rem;
  font-weight: 600;
}

.exito {
  color: #27ae60;
  margin-top: 1rem;
  font-weight: 600;
}

.btn-ver-mas {
  display: inline-block;
  color: var(--primary-green);
  text-decoration: none;
  font-weight: 600;
}

.btn-ver-mas:hover {
  text-decoration: underline;
}

@media (max-width: 768px) {
  .detalle-wrapper {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
}
</style>
