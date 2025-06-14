const Todo = require("../models/todo")

// define route handler 

exports.createTodo = async(req,res) => {
    try {
        // fetch data from request body
        const {title, description} = req.body;
        // create a new todo item
        const todo = new Todo({
            title,
            description,
            createdAt: Date.now(),
            updatedAt: Date.now()
        });
        // save the todo item to the database
        const savedTodo = await todo.save();
        // send response back to client
        res.status(200).json({
            success: true,
            message: "Todo created successfully",
        });
        // console.log(savedTodo);

    }
    catch(err) {
        console.error("Error creating todo:", err);
        res.status(500).json({
            success: false,
            message: "Internal server error",
            error: err.message
        });
        
    }
}
