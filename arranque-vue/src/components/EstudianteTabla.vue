<template>
  <div class="container">
    <div v-show="mostrar">
      <h1>Estudiante Guardado</h1>
    </div>
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

    <table>
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Apellido</th>
          <th>Edad</th>
          <th>Genero</th>
          <th>Apodo</th>
          <th>Accion</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="{ nombre, apellido, edad, genero, apodo } in lista"
          :key="nombre"
        >
          <td>{{ nombre }}</td>
          <td>{{ apellido }}</td>
          <td>{{ edad }}</td>
          <td>{{ genero }}</td>
          <td>{{ apodo }}</td>
          <td><button>Ver</button></td>
        </tr>
      </tbody>
    </table>
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
        {
          nombre: "Dario",
          apellido: "Vergara",
          edad: 24,
          genero: "Masculino",
          apodo: "Calixto",
        },
        {
          nombre: "Belen",
          apellido: "Paca",
          edad: 25,
          genero: "Femenino",
          apodo: "Bel",
        },
        {
          nombre: "Andy",
          apellido: "Cueva",
          edad: 25,
          genero: "Masculino",
          apodo: "Jagandy",
        },
        {
          nombre: "Bob",
          apellido: "Esponja",
          edad: 26,
          genero: "Masculino",
          apodo: "Calixto2",
        },
        {
          nombre: "Patricio",
          apellido: "Estrella",
          edad: 27,
          genero: "Masculino",
          apodo: "Calixto3",
        },
        {
          nombre: "Cala",
          apellido: "Mardo",
          edad: 28,
          genero: "Masculino",
          apodo: "Calixto4",
        },
        {
          nombre: "Calixto",
          apellido: "Ortiz",
          edad: 29,
          genero: "Masculino",
          apodo: "Calixto5",
        },
      ],
      mostrar: false,
    };
  },
  methods: {
    agregarEstudiante() {
      const nuevo = {
        nombre: this.nuevoNombre,
        apellido: this.nuevoApellido,
        edad: this.nuevoEdad,
        genero: this.nuevoGenero,
        apodo: this.nuevoApodo,
      };
      this.lista.unshift(nuevo);
      /* this.lista.push(nuevo);*/
      this.mostrar=true;
      this.nombre = null;

      setTimeout(()=>{this.mostrar=false;},3000);
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
  background: #c4deff;
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
html {
  font-family: "helvetica neue", helvetica, arial, sans-serif;
}
table {
  padding-left: 200px;
}
thead th,
tfoot th {
  font-family: "Rock Salt", cursive;
  background-color: #f4f6f8;
}

th {
  letter-spacing: 2px;
}

td {
  letter-spacing: 1px;
}

tbody td {
  text-align: center;
  transition: background-color 0.2s;
}

tfoot th {
  text-align: right;
}
</style>