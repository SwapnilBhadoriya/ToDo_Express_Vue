<template>
  <div id="app" class="container-md bg-dark ">
    <h1><strong>NOT TO DO LIST</strong></h1>
    <div class="m-3 ">
      <input type="text" v-model="newTodo" placeholder="Add a new todo" class="form-control">
      <button @click="addTodo" type="button" class="btn btn-success m-2">ADD</button>
    </div>
    <div class="p-4 m-3">

      <listItem v-for="todo, index in todos" v-bind:todo="todo" v-bind:key="todo.id"></listItem>
      <button  class="btn btn-primary" @click="getTodos">GetToDos</button>
    </div>
  </div>
</template>
<script>
import axios from 'axios';
import listItem from './components/TodoItem.vue'
export default {
  data: function () {
    return {
      todos: [],
      newTodo: ''
    }
  },
  created:function(){
    this.getTodos();
  },
  methods: {
    getTodos: function () {
      axios.get('http://localhost:3000/todos').then((response) => {
        this.todos = response.data.data;
        console.log(response.data);
      }).catch((err) => console.log(err));
    },
    addTodo: function () {
      if (this.newTodo.length > 5) {
        axios.post('http://localhost:3000/todos', { task: this.newTodo }).then((response) => {
          this.getTodos();
          console.log(response)
        });
      }

    }

  },
  components: { listItem }
}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: ghostwhite;
  background-color: #2c3e50;
  max-width: 500px;
}
</style>
