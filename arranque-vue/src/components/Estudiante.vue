<template>
  <div class="container">
    <label for="id_nombre">Nombre:</label>
    <input v-model="nuevoNombre" id="id_nombre" type="text" />
    <label for="id_apellido">Apellido:</label>
    <input v-model="nuevoApellido" id="id_apellido" type="text" />
    <button @click="agregarEstudiante()">Agregar Estudiante</button>

    <ul>
      <li v-for="{ nombre, apellido } in lista" :key="nombre">
        Nombre: {{ nombre }} - Apellido: {{ apellido }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      nuevoNombre: null,
      nuevoApellido: null,
      lista: [
        { nombre: "Dario", apellido: "Vergara" },
        { nombre: "Belen", apellido: "Paca" },
        { nombre: "Andy", apellido: "Cueva" },
        { nombre: "Bob", apellido: "Esponja" },
        { nombre: "Patricio", apellido: "Estrella" },
        { nombre: "Cala", apellido: "Mardo" },
        { nombre: "Calixto", apellido: "Ortiz" },
      ],
    };
  },
  methods: {
    agregarEstudiante() {
      const nuevo = {
        nombre: this.nuevoNombre,
        apellido: this.nuevoApellido,
      };
      this.lista.unshift(nuevo);
      /* this.lista.push(nuevo);*/
    },
  },
};
</script>

<style>
* {
  font-size: 21px;
  font-family: "Times New Roman", Times, serif;
}
</style>