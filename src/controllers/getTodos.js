// import the TODO Model
const Todo = require("../models/todo")

// define route handler for getting all todos

exports.getTodos = async(req,res) => {
    try {
        // Fetch all todos from the database
        const todos = await Todo.find();
        // Send the todos as a JSON response
        res.status(200).json(
            {
                success: true,
                data: todos,
                message:"Entire Data Fetched Successfully"

            }
        );
         
    }
    catch(err) {
       res.status(500).json({
            success: false,
            message: "Internal Server Error",
            error: err.message
        });
    }
}
exports.getTodosById =  async(req, res) => {
    try {
        // Fetch a todo by its ID from the database
        
        const todo = await Todo.findById(req.params.id);
        if (!todo) {
            return res.status(404).json({
                success: false,
                message: "Todo not found"
            });
        }
        // Send the todo as a JSON response
        res.status(200).json({
            success: true,
            data: todo,
            message: "Todo fetched successfully"
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            message: "Internal Server Error",
            error: err.message
        });
    }
}