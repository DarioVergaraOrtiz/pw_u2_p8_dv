<template>
  <!--<HolaMundoView/>-->
  <!--<ContadorVue/>-->
  <EstudianteView/>
</template>

<script>

import EstudianteView from "@/views/EstudianteView.vue";

export default {
  name: "App",
  components: {
    EstudianteView,
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