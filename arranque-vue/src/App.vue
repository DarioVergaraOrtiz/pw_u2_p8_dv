<template>
  <!--<HolaMundoView/>-->
  <!--<ContadorVue/>-->
  <EstudianteTablaView/>
</template>

<script>

import EstudianteTablaView from "@/views/EstudianteTablaView.vue";

export default {
  name: "App",
  components: {
    EstudianteTablaView,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #20272e;
  margin-top: 60px;
}
p {
  color: yellow;
  background: rgb(55, 55, 161);
}
</style>