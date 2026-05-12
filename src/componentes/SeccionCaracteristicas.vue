<template>
  <section id="caracteristicas" class="caracteristicas">
    <div class="container">
      <div class="split">
        <div class="info">
          <h2>Características Detalladas</h2>
          <ul class="lista-specs">
            <li><strong>Especie:</strong> Echeveria elegans</li>
            <li><strong>Tamaño:</strong> 8 a 12 cm de diámetro</li>
            <li><strong>Maceta:</strong> Terracota artesanal incluida</li>
            <li><strong>Riego:</strong> Cada 2 o 3 semanas (muy bajo)</li>
            <li><strong>Luz:</strong> Directa o indirecta brillante</li>
            <li><strong>Ideal para:</strong> Interiores y escritorios</li>
          </ul>
        </div>
        <div class="visual">
          <img src="/Suculenta.png" alt="Detalle Suculenta" class="img-detalle" />
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.split {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
}

h2 {
  font-size: 2.5rem;
  margin-bottom: 2rem;
}

.lista-specs {
  list-style: none;
}

.lista-specs li {
  padding: 1rem 0;
  border-bottom: 1px solid #eee;
  font-size: 1.1rem;
}

.lista-specs li strong {
  color: var(--primary-green);
  width: 150px;
  display: inline-block;
}

.img-detalle {
  width: 100%;
  max-width: 500px;
  height: auto;
  border-radius: var(--border-radius);
  box-shadow: 0 10px 30px rgba(0,0,0,0.08);
}

@media (max-width: 768px) {
  .split {
    grid-template-columns: 1fr;
  }
}
</style>
