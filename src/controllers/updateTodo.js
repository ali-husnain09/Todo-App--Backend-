const Todo = require("../models/todo")

// define route handler 

exports.updateTodo = async(req,res) => {
    try {
        // const { id } = req.params;
        const { title, description } = req.body;
        // Validate the input data
        const update = await Todo.findByIdAndUpdate(
            req.params.id, 
            { title, description, updatedAt: Date.now() }, 
            { new: true, runValidators: true }
           
        )
        res.status(200).json({
            success: true,
            data: update,
            message: "Todo updated successfully"
        });
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
