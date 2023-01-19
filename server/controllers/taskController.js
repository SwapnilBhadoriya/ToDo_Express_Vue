const { pool } = require("../config/dbconnect");

const getAllTodos = async (req, res) => {
  try {
    const result = await pool.query("Select * from Todos");
    res.status(200).json({ data: result.rows });
  } catch (error) {
    console.log("Error in fetching data from the database..");
    res.status(500).json({ msg: "Server side Error", error });
  }
};
const addNewTodo = async (req, res) => {
  try {
    const addQuery = "Insert into Todos(task) Values($1)";
    const todo = [req.body.task];
    await pool.query(addQuery, todo);
    res.status(201).json({ msg: "Successfully added the todo" });
  } catch (error) {
    res.status(500).json({ msg: "Server side Error", error });
  }
};
const getSingleTodo = async (req, res) => {
  try {
    const result = await pool.query("Select * from Todos where id=$1", [
      req.params.id,
    ]);
    res.status(200).json({ data: result.rows });
  } catch (error) {
    console.log("Error in getting data from the database.");
    res.status(500).json({ msg: "Server side Error", error });
  }
};

const deleteTodo = async (req, res) => {
  try {
    await pool.query("Delete from Todos where id=$1", [req.params.id]);
    res.status(204).send();
  } catch (error) {
    console.log("Error in deleting data from the database.");
    res.status(500).json({ msg: "Server side Error", error });
  }
};

const updateTodo = async (req, res) => {
  try {
    const updates = [req.body.task, req.body.completed, req.params.id];
    await pool.query(
      "Update Todos set task=$1,completed=$2 where id=$3",
      updates
    );
    res.status(201).json({ msg: "Updation Successfull" });
  } catch (error) {
    console.log("Error in updating data to the database.");
    res.status(500).json({ msg: "Server side Error", error });
  }
};


module.exports = {getAllTodos,getSingleTodo,deleteTodo,updateTodo,addNewTodo};