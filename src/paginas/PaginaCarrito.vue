<template>
  <div class="pagina-carrito">
    <div class="container">
      <h1>Tu Carrito de Compras</h1>
      
      <div v-if="carrito.numeroPedidoConfirmado" class="confirmacion-pedido">
        <div class="card-exito">
          <h2>¡Pedido Realizado!</h2>
          <p>Tu número de confirmación es: <strong>#{{ carrito.numeroPedidoConfirmado }}</strong></p>
          <p>Te hemos enviado los detalles a tu correo electrónico.</p>
          <button @click="carrito.cancelarPedido" class="btn-primary">Volver a Empezar</button>
        </div>
      </div>

      <div v-else-if="carrito.items.length > 0" class="contenido-carrito">
        <div class="tabla-carrito">
          <div class="header-tabla">
            <span>Producto</span>
            <span>ID</span>
            <span>Precio</span>
            <span>Cantidad</span>
            <span>Subtotal</span>
          </div>
          <div v-for="item in carrito.items" :key="item.producto.id" class="fila-carrito">
            <div class="prod-info">
              <img :src="item.producto.imagen" :alt="item.producto.nombre" class="img-mini" />
              <span>{{ item.producto.nombre }}</span>
            </div>
            <span class="sku-mini">{{ item.producto.id }}</span>
            <span>${{ item.producto.precio.toLocaleString() }}</span>
            <div class="selector-cant-mini">
              <input 
                type="number" 
                :value="item.cantidad" 
                @input="e => handleAjuste(item.producto, parseInt(e.target.value))"
                min="0"
                :max="item.producto.stock"
              />
            </div>
            <span class="subtotal-item">${{ (item.producto.precio * item.cantidad).toLocaleString() }}</span>
          </div>
        </div>

        <div class="checkout-seccion">
          <div class="resumen-pedido">
            <h3>Resumen del Pedido</h3>
            <div class="linea-resumen">
              <span>Subtotal:</span>
              <span>${{ carrito.subtotal.toLocaleString() }}</span>
            </div>
            <div class="linea-resumen">
              <span>Gastos de envío:</span>
              <span>${{ carrito.gastoEnvio.toLocaleString() }}</span>
            </div>
            <div class="linea-resumen">
              <span>Impuestos (19%):</span>
              <span>${{ Math.round(carrito.impuestos).toLocaleString() }}</span>
            </div>
            <div class="linea-resumen total">
              <span>Total:</span>
              <span>${{ Math.round(carrito.total).toLocaleString() }}</span>
            </div>
          </div>

          <form @submit.prevent="handleConfirmar" class="form-checkout">
            <h3>Información de Envío</h3>
            <div class="form-group">
              <label>Dirección de Facturación</label>
              <input type="text" v-model="form.facturacion" required placeholder="Calle, Ciudad, Región" />
            </div>
            <div class="form-group">
              <label>Dirección de Envío</label>
              <input type="text" v-model="form.envio" required placeholder="Calle, Ciudad, Región" />
            </div>
            <div class="botones-checkout">
              <button type="submit" class="btn-primary">Confirmar orden de compra</button>
              <button type="button" @click="carrito.cancelarPedido" class="btn-cancelar">Cancelar orden de compra</button>
            </div>
          </form>
        </div>
      </div>

      <div v-else class="carrito-vacio">
        <p>No tienes productos en el carrito todavía.</p>
        <router-link to="/productos" class="btn-primary">Ver Productos</router-link>
      </div>

      <div class="acciones-finales">
        <router-link to="/productos" class="btn-link">Ver más Productos</router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive } from 'vue'
import { useCarritoStore } from '../almacenes/useCarrito'

const carrito = useCarritoStore()

const form = reactive({
  facturacion: '',
  envio: ''
})

function handleAjuste(producto, nuevaCantidad) {
  const exito = carrito.ajustarCantidad(producto.id, nuevaCantidad)
  if (!exito && nuevaCantidad > producto.stock) {
    alert(`Lo sentimos, solo hay ${producto.stock} unidades de ${producto.nombre} en inventario.`)
  }
}

function handleConfirmar() {
  carrito.realizarPedido()
}
</script>

<style scoped>
.pagina-carrito {
  padding-top: 8rem;
  padding-bottom: 5rem;
}

h1 {
  text-align: center;
  margin-bottom: 3rem;
  color: var(--primary-green);
}

.tabla-carrito {
  background: white;
  border-radius: 12px;
  box-shadow: var(--shadow);
  overflow: hidden;
  margin-bottom: 3rem;
}

.header-tabla, .fila-carrito {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr 1fr;
  padding: 1.5rem;
  align-items: center;
  border-bottom: 1px solid #eee;
}

.header-tabla {
  background: #f9f9f9;
  font-weight: 700;
  color: var(--text-dark);
}

.prod-info {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.img-mini {
  width: 50px;
  height: 50px;
  object-fit: cover;
  border-radius: 4px;
}

.sku-mini {
  font-size: 0.8rem;
  color: #999;
}

.selector-cant-mini input {
  width: 60px;
  padding: 0.4rem;
  border: 1px solid #ddd;
  border-radius: 4px;
}

.subtotal-item {
  font-weight: 700;
  color: var(--primary-green);
}

.checkout-seccion {
  display: grid;
  grid-template-columns: 1fr 1.5fr;
  gap: 4rem;
}

.resumen-pedido, .form-checkout {
  background: #fdfdfd;
  padding: 2rem;
  border-radius: 16px;
  border: 1px solid #eee;
}

h3 {
  margin-bottom: 1.5rem;
  border-bottom: 2px solid var(--light-green);
  padding-bottom: 0.5rem;
}

.linea-resumen {
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
}

.linea-resumen.total {
  font-size: 1.5rem;
  font-weight: 800;
  margin-top: 1.5rem;
  padding-top: 1rem;
  border-top: 2px solid #eee;
  color: var(--primary-green);
}

.form-group {
  margin-bottom: 1.5rem;
}

.form-group label {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 600;
}

.form-group input {
  width: 100%;
  padding: 0.8rem;
  border: 1px solid #ddd;
  border-radius: 6px;
}

.botones-checkout {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 2rem;
}

.btn-cancelar {
  background: transparent;
  color: #e74c3c;
  border: 1px solid #e74c3c;
  padding: 1rem;
  border-radius: 30px;
  font-weight: 600;
  cursor: pointer;
}

.btn-cancelar:hover {
  background: #fdf2f2;
}

.carrito-vacio, .confirmacion-pedido {
  text-align: center;
  padding: 4rem 0;
}

.card-exito {
  background: #f0fff4;
  padding: 3rem;
  border-radius: 20px;
  border: 2px solid #c6f6d5;
  display: inline-block;
}

.card-exito .icon {
  font-size: 4rem;
  display: block;
  margin-bottom: 1rem;
}

.acciones-finales {
  text-align: center;
  margin-top: 3rem;
}

.btn-link {
  color: var(--primary-green);
  text-decoration: none;
  font-weight: 600;
}

@media (max-width: 968px) {
  .header-tabla {
    display: none;
  }
  .fila-carrito {
    grid-template-columns: 1fr;
    gap: 1rem;
    text-align: center;
  }
  .prod-info {
    flex-direction: column;
  }
  .checkout-seccion {
    grid-template-columns: 1fr;
  }
}
</style>
