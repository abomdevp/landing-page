import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useCarritoStore = defineStore('carrito', () => {
  const items = ref([])
  const tasaImpuesto = 0.19 // 19% IVA
  const gastoEnvio = 2990
  const numeroPedidoConfirmado = ref(null)

  const subtotal = computed(() => {
    return items.value.reduce((total, item) => total + (item.producto.precio * item.cantidad), 0)
  })

  const impuestos = computed(() => subtotal.value * tasaImpuesto)
  
  const total = computed(() => {
    if (subtotal.value === 0) return 0
    return subtotal.value + impuestos.value + gastoEnvio
  })

  const totalItems = computed(() => {
    return items.value.reduce((acc, item) => acc + item.cantidad, 0)
  })

  function agregarProducto(producto, cantidad) {
    const itemExistente = items.value.find(i => i.producto.id === producto.id)
    if (itemExistente) {
      if (itemExistente.cantidad + cantidad <= producto.stock) {
        itemExistente.cantidad += cantidad
        return true
      }
      return false
    } else {
      if (cantidad <= producto.stock) {
        items.value.push({ producto, cantidad })
        return true
      }
      return false
    }
  }

  function ajustarCantidad(productoId, nuevaCantidad) {
    const item = items.value.find(i => i.producto.id === productoId)
    if (item) {
      if (nuevaCantidad <= item.producto.stock) {
        item.cantidad = nuevaCantidad
        if (item.cantidad <= 0) {
          items.value = items.value.filter(i => i.producto.id !== productoId)
        }
        return true
      }
      return false
    }
  }

  function realizarPedido() {
    numeroPedidoConfirmado.value = Math.floor(Math.random() * 900000) + 100000
    items.value = []
  }

  function cancelarPedido() {
    items.value = []
    numeroPedidoConfirmado.value = null
  }

  return {
    items,
    subtotal,
    impuestos,
    gastoEnvio,
    total,
    totalItems,
    numeroPedidoConfirmado,
    agregarProducto,
    ajustarCantidad,
    realizarPedido,
    cancelarPedido
  }
})
