<template>
  <div class="app-container">
    <NavBar />
    <main>
      <SeccionHero />
      <div class="container">
        <GaleriaImagenes />
      </div>
      <SeccionBeneficios />
      <SeccionCaracteristicas />
      <SeccionFAQ />
      <SeccionNotificaciones />
      <SeccionCompra />
      <SeccionContacto />
    </main>
    <FooterPagina />
  </div>
</template>

<script setup>
import NavBar from './componentes/NavBar.vue'
import SeccionHero from './componentes/SeccionHero.vue'
import GaleriaImagenes from './componentes/GaleriaImagenes.vue'
import SeccionBeneficios from './componentes/SeccionBeneficios.vue'
import SeccionCaracteristicas from './componentes/SeccionCaracteristicas.vue'
import SeccionFAQ from './componentes/SeccionFAQ.vue'
import SeccionNotificaciones from './componentes/SeccionNotificaciones.vue'
import SeccionCompra from './componentes/SeccionCompra.vue'
import SeccionContacto from './componentes/SeccionContacto.vue'
import FooterPagina from './componentes/FooterPagina.vue'
import './estilos.css'
</script>

<style>
/* Estilos globales que no caben en estilos.css por ser dinámicos de Vue */
html {
  scroll-behavior: smooth;
}
</style>
