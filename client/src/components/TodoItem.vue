<template>
    <div v-if="!showEdit" class="d-flex justify-content-between align-items-center bg-secondary m-2">
        <div class="p-4">{{ todo.task }}</div>
        <div>
            <button type="button" @click="toggle" class="btn btn-success m-2">Edit</button>
            <button @click="deletTodo(todo.id)" type="button" class="btn btn-danger m-2">Delete</button>
        </div>
        
    </div>
    <editTodo v-else v-bind:val="todo.id" v-on:close="toggle" v-on:edittodo="editTodo"></editTodo>


</template>
<script>
import axios from 'axios';
import editTodo from './editTodo.vue';
export default {
    data: function () {
        return {showEdit:false}
     },
    props: ['todo'],
    methods: {
        deletTodo: function (key) {
            axios.delete('http://localhost:3000/todos/' + key).then((response) => console.log(response));
        },
        toggle(){
            this.showEdit = !this.showEdit;
        },

        editTodo: function (obj) {
            const id = obj.id;
            const task = obj.task;
            console.log(obj);
            axios.patch('http://localhost:3000/todos/'+id,{task:task,id:id,completed:false}).then((response)=>{
                console.log(response);
                this.toggle();
            })

           
        }
    },
    components: { editTodo }
}
</script>