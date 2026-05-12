<template>
  <section id="beneficios" class="beneficios">
    <div class="container">
      <h2>¿Por qué elegir nuestra Suculenta?</h2>
      <div class="grid-beneficios">
        <div class="card">
          <div class="icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
          </div>
          <h3>Purifica el ambiente</h3>
          <p>Mejora la calidad del aire de tu hogar u oficina absorbiendo toxinas y liberando oxígeno.</p>
        </div>
        <div class="card">
          <div class="icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="1" y="3" width="15" height="13"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg>
          </div>
          <h3>Reduce el estrés</h3>
          <p>Tener plantas cerca disminuye la ansiedad y mejora el estado de ánimo y la productividad.</p>
        </div>
        <div class="card">
          <div class="icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
          </div>
          <h3>Cuidado sin esfuerzo</h3>
          <p>Solo necesita riego cada 2–3 semanas. Es la compañera perfecta para personas con poco tiempo.</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.beneficios {
  background-color: var(--light-green);
  text-align: center;
}

h2 {
  font-size: 2.5rem;
  margin-bottom: 3rem;
  color: var(--primary-green);
}

.grid-beneficios {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
}

.card {
  background: white;
  padding: 3rem 2rem;
  border-radius: var(--border-radius);
  box-shadow: var(--shadow);
  transition: transform 0.3s;
}

.card:hover {
  transform: translateY(-10px);
}

.icon {
  font-size: 3rem;
  margin-bottom: 1.5rem;
}

h3 {
  margin-bottom: 1rem;
}

p {
  color: var(--text-light);
}
</style>
