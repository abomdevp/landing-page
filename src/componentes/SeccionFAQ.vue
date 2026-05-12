<template>
  <section id="faq" class="faq">
    <div class="container small">
      <h2>Preguntas Frecuentes</h2>
      <div class="acordeon">
        <div v-for="(item, index) in faqs" :key="index" class="faq-item" @click="toggle(index)">
          <div class="pregunta">
            {{ item.q }}
            <span class="icon" :class="{ rotated: openIndex === index }">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"/></svg>
            </span>
          </div>
          <div v-show="openIndex === index" class="respuesta">
            {{ item.a }}
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const openIndex = ref(null)
const faqs = [
  { q: '¿Cuánta agua necesita?', a: 'Muy poca. Solo riégala cuando el sustrato esté completamente seco, aproximadamente cada 2 o 3 semanas.' },
  { q: '¿Puedo tenerla en interiores?', a: 'Sí, siempre que reciba buena luz natural. Cerca de una ventana es el lugar ideal.' },
  { q: '¿Viene con maceta?', a: 'Sí, todas nuestras suculentas incluyen una maceta de terracota que favorece la salud de las raíces.' },
  { q: '¿Qué hago si sus hojas se caen?', a: 'Suele ser signo de exceso de agua. Reduce el riego y asegúrate de que tenga buena ventilación.' }
]

const toggle = (index) => {
  openIndex.value = openIndex.value === index ? null : index
}
</script>

<style scoped>
.container.small {
  max-width: 800px;
}

h2 {
  text-align: center;
  margin-bottom: 3rem;
}

.acordeon {
  border-top: 1px solid #eee;
}

.faq-item {
  border-bottom: 1px solid #eee;
  padding: 1.5rem 0;
  cursor: pointer;
}

.pregunta {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: 600;
  font-size: 1.1rem;
}

.icon {
  transition: transform 0.3s ease;
  color: var(--primary-green);
}

.icon.rotated {
  transform: rotate(180deg);
}

.respuesta {
  margin-top: 1rem;
  color: var(--text-light);
  line-height: 1.5;
}
</style>
