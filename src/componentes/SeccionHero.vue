<template>
  <section class="hero">
    <div class="hero-content">
      <h1>La Suculenta Perfecta para tu Espacio</h1>
      <p>Belleza natural, cuidado mínimo. Transforma tu hogar con la elegancia de la Echeveria.</p>
      <div class="actions">
        <a href="#compra" class="btn-primary">Quiero una</a>
      </div>
    </div>
    <div class="hero-image">
      <img src="/Suculenta.png" alt="Suculenta Echeveria" class="img-suculenta" />
    </div>
  </section>
</template>

<style scoped>
.hero {
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  gap: 4rem;
  min-height: 80vh;
  padding-top: 8rem;
}

h1 {
  font-size: 3.5rem;
  color: var(--primary-green);
}

p {
  font-size: 1.2rem;
  color: var(--text-light);
  margin-bottom: 2rem;
}

.btn-primary {
  text-decoration: none;
  display: inline-block;
  padding: 1.2rem 2.5rem;
  border-radius: 50px;
  background-color: var(--primary-green);
  color: white;
  font-weight: 700;
  transition: all 0.3s ease;
}

.img-suculenta {
  width: 100%;
  max-width: 500px;
  height: auto;
  border-radius: var(--border-radius);
  box-shadow: 0 20px 40px rgba(0,0,0,0.1);
}

@media (max-width: 968px) {
  .hero {
    grid-template-columns: 1fr;
    text-align: center;
  }
  h1 {
    font-size: 2.5rem;
  }
}
</style>
