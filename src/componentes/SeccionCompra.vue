<template>
  <section id="compra" class="compra">
    <div class="container">
      <div class="compra-grid">
        <div class="precio-card">
          <span class="etiqueta">Oferta Limitada</span>
          <div class="precio">$12.990</div>
          <p>Incluye planta, maceta de terracota y guía de cuidados.</p>
          <button class="btn-primary">Comprar ahora</button>
          <div class="garantias">
            <span class="garantia-item">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
              Pago seguro
            </span>
            <span class="garantia-item">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="1" y="3" width="15" height="13"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg>
              Envío nacional
            </span>
            <span class="garantia-item">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
              Garantía 30 días
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.compra {
  background-color: #fafafa;
  text-align: center;
}

.compra-grid {
  display: flex;
  justify-content: center;
}

.precio-card {
  background: white;
  padding: 4rem;
  border-radius: 24px;
  box-shadow: 0 20px 40px rgba(0,0,0,0.1);
  max-width: 500px;
  width: 100%;
}

.etiqueta {
  display: inline-block;
  padding: 0.4rem 1rem;
  background: var(--light-green);
  color: var(--primary-green);
  border-radius: 20px;
  font-weight: 700;
  font-size: 0.8rem;
  margin-bottom: 1.5rem;
}

.precio {
  font-size: 4rem;
  font-weight: 800;
  color: var(--primary-green);
  margin-bottom: 1rem;
}

.precio-card p {
  color: var(--text-light);
  margin-bottom: 2.5rem;
}

button {
  width: 100%;
  font-size: 1.2rem;
  padding: 1.5rem;
}

.garantias {
  margin-top: 2rem;
  display: flex;
  justify-content: space-between;
  font-size: 0.8rem;
  color: #888;
}

.garantia-item {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.garantia-item svg {
  color: var(--primary-green);
}

@media (max-width: 500px) {
  .garantias {
    flex-direction: column;
    gap: 1rem;
  }
}
</style>
