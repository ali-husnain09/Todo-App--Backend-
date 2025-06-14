const mongoose = require("mongoose");
const { Schema } = mongoose;
const todoSchema = new Schema({
  title: {
    type: String,
    required: true,
    maxLenght: 50,
  },  
  description: {
    type: String,
    required: true,
    maxLenght: 50,
  },
  completed: {
    type: Boolean,
    default: false,
  },
  createdAt: {
    type: Date,
    required: true,
    default: Date.now(),
  },
  updatedAt: {
    type: Date,
    required: true,
    default: Date.now(),
  },
});
const Todo = mongoose.model("Todo", todoSchema);
module.exports = Todo;
