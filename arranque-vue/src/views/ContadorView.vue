<template>
  <div>
    <Contador title="Titulo 1" v-bind:value="1" />
    <Contador title="Titulo 2" :value="metodo1()" />
    <Contador title="Titulo 3"/>
  </div>
</template>

<script>
import Contador from "@/components/Contador.vue";
export default {
  components: {
    Contador,
  },
  data() {
    return {
      numero: 20,
    };
  },
  methods:{
    metodo1(){
      return 2+9;
    }
  }
};
</script>

<style>
</style>