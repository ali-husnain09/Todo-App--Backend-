const Todo = require("../models/todo")

// define route handler 

exports.deleteTodo = async(req,res) => {
    try {
       const {id} = req.params;
        // Validate the input data
        const todo = await Todo.findByIdAndDelete(id);
       if(!todo) {
             
        return res.status(400).json({
            sucess:false,
            message:"Todo is not found",

        })};
        // Send a success response
       
       
        res.status(200).json({
            success: true,
            message: "Todo deleted successfully",
        });
    

    }
    catch(err) {
       res.status(500).json({
            success: false,
            message: "Internal server error",
            error: err.message
        });
        
    }
}
