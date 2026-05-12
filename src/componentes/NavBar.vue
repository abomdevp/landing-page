<template>
  <nav class="navbar">
    <div class="logo">Suculenta Echeveria</div>
    <div class="links">
      <a href="#beneficios">Beneficios</a>
      <a href="#caracteristicas">Detalles</a>
      <a href="#faq">FAQ</a>
      <a href="#contacto">Contacto</a>
    </div>
  </nav>
</template>

<style scoped>
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
}

.links {
  display: flex;
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
