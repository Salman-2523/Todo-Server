const Todo = require("../models/Todo");

// GET ALL TODOS
getTodos = async (req, res) => {
  try {
    const todos = await Todo.find();
    res.json(todos);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// GET A PARTICULAR TODO
getTodo = async (req, res) => {
  try {
    const todo = await Todo.findById(req.params.id);
    if (!todo) {
      return res.status(404).json({ message: "Cannot find todo item" });
    }
    res.send(todo);
  } catch (err) {
    res.status(404).send({ message: "could not find the todo!"});
  }
};

// CREATE A NEW TODO
createTodo = async (req, res) => {
  const todo = new Todo({
    task: req.body.task,
    completed: req.body.completed,
  });

  try {
    const newTodo = await todo.save();
    res.status(201).json(newTodo);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// UPDATE A TODO
updateTodo = async (req, res) => {
  const id = req.params.id;
  try {
    await Todo.findByIdAndUpdate(id, { $set: req.body });
    res.status(200).send({ message: "successfully updated the todo!" });
  } catch (error) {
    res.status(404).send({ message: "could not find the todo to update!" });
  }
};

// DELETE A TODO
deleteTodo = async (req, res) => {
  const id = req.params.id;
  try {
    await Todo.findByIdAndDelete(id);
    res.status(200).send({ message: "Todo has been deleted" });
  } catch (err) {
    res.status(404).send({ message: "could not find the todo to delete!" });
  }
};

module.exports = { getTodos, getTodo, deleteTodo, updateTodo, createTodo };
