<template>
  <section id="contacto" class="contacto">
    <div class="container">
      <h2>Ponte en contacto</h2>
      <div class="contacto-wrapper">
        <div class="info-contacto">
          <p>¿Tienes alguna duda específica? Estamos aquí para ayudarte.</p>
          <div class="email-directo">
            <strong>Email:</strong>
            <a href="mailto:hola@suculentas.cl">hola@suculentas.cl</a>
          </div>
        </div>
        <form @submit.prevent="enviarFormulario" class="form-contacto">
          <div class="form-group">
            <label>Nombre</label>
            <input type="text" placeholder="Tu nombre" required />
          </div>
          <div class="form-group">
            <label>Email</label>
            <input type="email" placeholder="tu@correo.com" required />
          </div>
          <div class="form-group">
            <label>Mensaje</label>
            <textarea placeholder="¿En qué podemos ayudarte?" rows="5" required></textarea>
          </div>
          <button type="submit" class="btn-primary" v-if="!enviado">Enviar mensaje</button>
          <div v-else class="mensaje-exito">¡Mensaje recibido! Te contactaremos pronto.</div>
        </form>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
const enviado = ref(false)
const enviarFormulario = () => {
  enviado.value = true
}
</script>

<style scoped>
h2 {
  text-align: center;
  margin-bottom: 3rem;
}

.contacto-wrapper {
  display: grid;
  grid-template-columns: 1fr 1.5fr;
  gap: 4rem;
}

.info-contacto p {
  font-size: 1.2rem;
  margin-bottom: 2rem;
}

.email-directo a {
  display: block;
  font-size: 1.5rem;
  color: var(--primary-green);
  text-decoration: none;
  font-weight: 700;
  margin-top: 0.5rem;
}

.form-contacto {
  background: #fdfdfd;
  padding: 2rem;
  border-radius: 16px;
  border: 1px solid #eee;
}

.form-group {
  margin-bottom: 1.5rem;
}

label {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 600;
}

input, textarea {
  width: 100%;
  padding: 1rem;
  border: 1px solid #ddd;
  border-radius: 8px;
  font-family: inherit;
}

.mensaje-exito {
  padding: 1rem;
  background: var(--light-green);
  color: var(--primary-green);
  border-radius: 8px;
  text-align: center;
  font-weight: 700;
}

@media (max-width: 768px) {
  .contacto-wrapper {
    grid-template-columns: 1fr;
  }
}
</style>
