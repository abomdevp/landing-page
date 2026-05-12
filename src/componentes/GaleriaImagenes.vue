<template>
  <div class="galeria">
    <div class="miniaturas">
      <div 
        v-for="i in 4" 
        :key="i" 
        class="miniatura" 
        :class="{ active: activeIndex === i }"
        @click="activeIndex = i"
      >
        <img src="/Suculenta.png" alt="Vista Suculenta" class="img-miniatura" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const activeIndex = ref(1)
</script>

<style scoped>
.galeria {
  margin-top: 2rem;
}

.miniaturas {
  display: flex;
  gap: 1rem;
  justify-content: center;
}

.miniatura {
  width: 80px;
  height: 80px;
  cursor: pointer;
  border: 2px solid transparent;
  border-radius: 8px;
  overflow: hidden;
  transition: border-color 0.2s;
}

.miniatura.active {
  border-color: var(--primary-green);
}

.img-miniatura {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
