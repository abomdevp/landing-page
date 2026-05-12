<template>
  <div class="app-container">
    <NavBar />
    <RouterView />
    <FooterPagina />
  </div>
</template>

<script setup>
import NavBar from './componentes/NavBar.vue'
import FooterPagina from './componentes/FooterPagina.vue'
import './estilos.css'
</script>

<style>
html {
  scroll-behavior: smooth;
}
</style>
