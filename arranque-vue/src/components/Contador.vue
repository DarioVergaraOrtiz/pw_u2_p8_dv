<template>
  <div class="container">
    <h1>Contador</h1>
    <p>{{ this.numero }} <sup>2</sup> = {{ calCuadrado }}</p>
    <div>
      <button v-on:click="incrementar()">+ 1</button>
      <button v-on:click="decrementar()" >- 1</button>
    </div>

    <!--
    <p>{{ numero + 1 }}</p>
    <p>{{ texto }}</p>
    <p>{{ activo }}</p>
    <p>{{ usuario }}</p>
    <p>{{ arreglo }}</p>
    1+1
    <br />
    {{ 1 + 1 }}
    <br />
    true?'Es verdadero':'Es falso'
    <br />
    {{ falso ? "Es verdadero" : "Es falso" }}-->
  </div>
</template>

<script>
/* Propiedades Reactivas, Option API
 */
export default {
  data() {
    return {
      numero: 5,
      texto: "Dario Vergara",
      activo: true,
      usuario: {
        nombre: "Dario",
        edad: 24,
        genero: "Masculino",
      },
      arreglo: ["Amarillo", "Azul"],
    };
  },
  methods: {
    calcularCuadrado() {
      console.log("Entro al método");
      return this.numero * this.numero;
    },
    incrementar() {
      this.numero++;
    },
    decrementar() {
      this.numero--;
    },
  },
  computed: {
    calCuadrado() {
      console.log("Entro propiedad computada");
      return this.numero * this.numero;
    },
  },
};
</script>

<style></style>