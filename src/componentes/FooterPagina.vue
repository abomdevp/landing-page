<template>
  <footer class="footer">
    <div class="container">
      <div class="footer-grid">
        <div class="footer-info">
          <h3>Suculenta Echeveria</h3>
          <p>Llevando la naturaleza a tu hogar de la forma más sencilla.</p>
        </div>
        <div class="footer-links">
          <a href="#">Privacidad</a>
          <a href="#">Términos</a>
          <a href="#">Envíos</a>
        </div>
      </div>
      <div class="copy">
        &copy; 2026 Suculenta Echeveria. Todos los derechos reservados.
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  padding: 4rem 10% 2rem;
  background: #222;
  color: white;
}

.footer-grid {
  display: flex;
  justify-content: space-between;
  margin-bottom: 3rem;
}

.footer-info h3 {
  color: white;
}

.footer-info p {
  opacity: 0.6;
}

.footer-links {
  display: flex;
  gap: 2rem;
}

.footer-links a {
  color: white;
  text-decoration: none;
  opacity: 0.8;
  transition: opacity 0.2s;
}

.footer-links a:hover {
  opacity: 1;
}

.copy {
  text-align: center;
  padding-top: 2rem;
  border-top: 1px solid #333;
  font-size: 0.8rem;
  opacity: 0.5;
}

@media (max-width: 600px) {
  .footer-grid {
    flex-direction: column;
    gap: 2rem;
    text-align: center;
  }
}
</style>
