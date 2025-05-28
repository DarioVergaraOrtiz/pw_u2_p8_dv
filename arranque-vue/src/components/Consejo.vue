<template>
  <div class="container">
    <h1>Consejo Aleatorio</h1>
    <button @click="obtenerConsejo" :disabled="cargando">
      {{ cargando ? 'Obteniendo...' : 'Obtener Consejo' }}
    </button>
    <p v-if="consejo">"{{ consejo }}"</p>
  </div>
</template>

<script>
import { consultarRespuestaFachada } from '@/clients/ConsejoClient.js';

export default {
  name: 'Consejo',
  data() {
    return {
      consejo: null,
      cargando: false,
    };
  },
  methods: {
    async obtenerConsejo() {
      this.cargando = true;
      try {
        // Llamada a la función que consulta el API para obtener un consejo
        console.log('Obteniendo consejo...');
        this.consejo = await consultarRespuestaFachada();
      } catch (error) {
        console.error('Error al obtener consejo:', error);
        this.consejo = 'No se pudo obtener un consejo. Intenta nuevamente.';
      } finally {
        this.cargando = false;
      }
    },
  },
};
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 1rem;

  max-width: 400px;
  width: 90%;
  min-height: 200px;    
  margin: 2rem auto;

  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  padding: 2rem;
  border-radius: 16px;
  box-shadow: 0 8px 24px rgba(0,0,0,0.2);

  text-align: center;
}

button {
  padding: 0.5rem 1rem;
  font-size: 1rem;
  cursor: pointer;
}

button[disabled] {
  opacity: 0.6;
  cursor: not-allowed;
}

p {
  margin: 0;
  min-height: 3em;  
  line-height: 1.4;
}
</style>