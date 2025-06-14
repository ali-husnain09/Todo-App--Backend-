const express = require('express');
const router = express.Router();
const {createTodo} = require('../controllers/createTodo');
const {getTodos,getTodosById} = require('../controllers/getTodos');
const {updateTodo} = require('../controllers/updateTodo');  
const {deleteTodo} = require('../controllers/deleteTodo');
// Route to get all todos   
router.get('/getTodos', getTodos);

// Route to create a new todo
router.post('/createTodo', createTodo);
// Route to get a todo by ID
router.get('/getTodos/:id', getTodosById);

// Route to update a todo by ID
router.put('/updateTodo/:id', updateTodo);
// Route to delete a todo by ID
router.delete('/deleteTodo/:id', deleteTodo);
module.exports = router;
// This code defines a route for creating a new todo item in an Express application.