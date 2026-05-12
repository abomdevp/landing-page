<template>
  <section class="notificaciones">
    <div class="container small">
      <div class="newsletter-card">
        <h2>No te pierdas nada</h2>
        <p>Regístrate para recibir consejos de cuidado y aviso cuando tengamos nuevas especies disponibles.</p>
        <form @submit.prevent="suscribirse" v-if="!enviado">
          <input type="email" placeholder="Tu correo electrónico" required />
          <button type="submit" class="btn-primary">Suscribirme</button>
        </form>
        <p v-else class="mensaje-exito">¡Gracias! Te avisaremos pronto.</p>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
const enviado = ref(false)
const suscribirse = () => {
  enviado.value = true
}
</script>

<style scoped>
.notificaciones {
  padding: 4rem 10%;
}

.newsletter-card {
  background-color: var(--primary-green);
  color: white;
  padding: 4rem 2rem;
  border-radius: 20px;
  text-align: center;
}

.newsletter-card h2 {
  color: white;
}

.newsletter-card p {
  margin-bottom: 2rem;
  opacity: 0.9;
}

form {
  display: flex;
  gap: 1rem;
  max-width: 500px;
  margin: 0 auto;
}

input {
  flex: 1;
  padding: 1rem 1.5rem;
  border-radius: 30px;
  border: none;
  font-size: 1rem;
}

.btn-primary {
  background-color: var(--white);
  color: var(--primary-green);
}

.mensaje-exito {
  font-weight: 700;
  font-size: 1.2rem;
}

@media (max-width: 600px) {
  form {
    flex-direction: column;
  }
}
</style>
