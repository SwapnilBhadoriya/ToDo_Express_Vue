const express = require('express');
const router = express.Router();

const {getAllTodos,addNewTodo,updateTodo,deleteTodo,getSingleTodo}= require('../controllers/taskController')

router.route('/').get(getAllTodos).post(addNewTodo);
router.route('/:id').get(getSingleTodo).patch(updateTodo).delete(deleteTodo);

module.exports = router;