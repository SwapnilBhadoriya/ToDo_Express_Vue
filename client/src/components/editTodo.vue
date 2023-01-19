<template>
    <div>


        <input type="text" v-model="updatedTodo" placeholder="Updated task" class="form-control">
        <button @click="$emit('edittodo', { id, task:updatedTodo })" type="button" class="btn btn-primary m-2">Update</button>
        <button @click="$emit('close')" type="button" class="btn btn-primary m-2">Close</button>
    </div>
</template>

<script>
export default {
    props: ['val'],
    data: function () {
        return {
            updatedTodo: '',
            id: this.val,
        }
    }
}
</script>