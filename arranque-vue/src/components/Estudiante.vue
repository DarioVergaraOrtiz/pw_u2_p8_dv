<template>
  <div class="container">
    <label for="id_nombre">Nombre:</label>
    <input v-model="nuevoNombre" id="id_nombre" type="text" />
    <label for="id_apellido">Apellido:</label>
    <input v-model="nuevoApellido" id="id_apellido" type="text" />
    <label for="id_edad">Edad:</label>
    <input v-model="nuevoEdad" id="id_edad" type="Number" />
    <label for="id_genero">Genero:</label>
    <input v-model="nuevoGenero" id="id_genero" type="text" />
    <label for="id_apodo">Apodo:</label>
    <input v-model="nuevoApodo" id="id_apodo" type="text" />
    <button @click="agregarEstudiante()">Agregar</button>

    <ul>
      <li v-for="{ nombre, apellido, edad, genero, apodo } in lista" :key="nombre">
        Nombre: {{ nombre }} - Apellido: {{ apellido }} - Edad: {{ edad }} - Genero: {{ genero }} - Apodo: {{ apodo }}
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
      nuevoEdad: null,
      nuevoGenero: null,
      nuevoApodo: null,
      lista: [
        { nombre: "Dario", apellido: "Vergara", edad:24, genero:"Masculino", apodo:"Calixto" },
        { nombre: "Belen", apellido: "Paca", edad:25, genero:"Femenino", apodo:"Bel" },
        { nombre: "Andy", apellido: "Cueva", edad:25, genero:"Masculino", apodo:"Jagandy" },
        { nombre: "Bob", apellido: "Esponja", edad:26, genero:"Masculino", apodo:"Calixto2" },
        { nombre: "Patricio", apellido: "Estrella", edad:27, genero:"Masculino", apodo:"Calixto3" },
        { nombre: "Cala", apellido: "Mardo", edad:28, genero:"Masculino", apodo:"Calixto4" },
        { nombre: "Calixto", apellido: "Ortiz", edad:29, genero:"Masculino", apodo:"Calixto5" },
      ],
    };
  },
  methods: {
    agregarEstudiante() {
      const nuevo = {
        nombre: this.nuevoNombre,
        apellido: this.nuevoApellido,
        edad: this.nuevoEdad,
        genero: this.nuevoGenero,
        apodo: this.nuevoApodo
      };
      this.lista.unshift(nuevo);
      /* this.lista.push(nuevo);*/
    },
  },
};
</script>

<style scoped>

.container {
  background: #baa4f7;
  border: 1px solid;
  border-radius: 12px;
  max-width: 900px;
  margin: 50px auto;
  padding: 50px;
}

label {
  display: block;
  color: #333;
  text-align: left;
}

input {
  background: #c4deff;
  color: black;
  width: 96%;
  border-radius: 8px;
  margin-bottom: 20px;
  border: 1px solid #ddd;
  padding: 10px 15px;
}

button {
  background: #7ba5db;
  padding: 12px 20px;
  border: none;
  border-radius: 8px;
  font-size: 20px;
  cursor: pointer;
  width: 150px;
}

ul {
  list-style: none;
  margin-top: 50px;
}

li {
  background: #c4deff;
  padding: 10px;
  border-radius: 8px;
  margin-bottom: 15px;
  font-size: 17px;

}

</style>