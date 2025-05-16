<template>
  <div class="container">
    <h1>{{ title }}</h1>
    <p>{{ this.numero }} <sup>2</sup> = {{ calCuadrado }}</p>
    <div>
      <button v-on:click="incrementar()">+ 1</button>
      <button @click="decrementar()">- 1</button>
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
  /*props: ["title", "value"],*/
  props: {
    title: String,
    value: {
      type: Number,
      required: false,
      default: 100,
      validator(value) {
        return value > 0;
      },
    },
    p1: Boolean,
    p2: Array,
    p3: Object,
    p4: Function,
    p5: Date,
    p6: Symbol,
  },
  data() {
    return {
      numero: this.value,
      titulo: "Contador",
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
  created(){
    if(this.value > 0){
      console.log("Es correcto")
    } else{
      throw new Error("Error, el valor no puede ser menor que cero");
    }
  }
};
</script>

<style></style>