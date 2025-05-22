<template>
  <div class="container">
    <img
      src="https://yesno.wtf/assets/no/19-2062f4c91189b1f88a9e809c10a5b0f0.gif"
      alt="No se pudo cargar"
    />
    <div class="container-opaco"></div>
    <div class="pregunta-container">
      <input v-model="pregunta" type="text" placeholder="Hazme una pregunta" />
      <p>Recuerda terminar con un signo de pregunta (?)</p>
      <h2> {{pregunta}} </h2>
      <h1> {{respuesta}} </h1>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      pregunta: null,
      respuesta: null,
    };
  },
  watch:{
    pregunta(value, oldValue) {
      console.log("Valor actual: "+ value);
      console.log("Valor anterior: "+ oldValue);
    }
  }
};
</script>

<style scoped>
.container-opaco,
img {
  height: 100vh;
  width: 100vw;
  max-height: 100%;
  max-width: 100%;
  position: fixed;
  left: 0px;
  top: 0px;
}

.container-opaco {
  background-color: rgba(0, 0, 0, 0.5);
}
.pregunta-container {
  position: relative;
}
input {
  width: 250px;
  padding: 10px 15px;
  border-radius: 5px;
  border: none;
  margin-top: 50px;
}
input:focus {
  outline: none;
}
p {
  color: white;
  font-size: 25px;
}

h1,
h2 {
  color: white;
}

h2 {
  margin-top: 160px;
}
</style>