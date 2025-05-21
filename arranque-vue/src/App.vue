<template>
  <!--<HolaMundoView/>-->
  <!--<ContadorVue/>-->
  <PaisTablaView/>
</template>

<script>

import PaisTablaView from "@/views/PaisTablaView.vue";

export default {
  name: "App",
  components: {
    PaisTablaView,
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