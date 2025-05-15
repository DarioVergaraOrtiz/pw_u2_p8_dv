<template>
  <!--<HolaMundoView/>-->
  <ContadorVue />
</template>

<script>
import ContadorVue from "@/components/Contador.vue";
import HolaMundoView from "@/views/HolaMundoView.vue";

export default {
  name: "App",
  components: {
    ContadorVue,
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