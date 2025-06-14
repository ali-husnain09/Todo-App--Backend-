# Todo App
A simple todo app built with express, node.js and mongodb as a backend service.
## Features
- Add, edit, and delete todos

# Installation
1. Clone the repository
   ```bash
   git clone <https://github.com/ali-husnain09/Todo-App-Backend>
   cd <Todo-App-Backend>
   ```
2. Install dependencies
   ```bash
    npm install
    ```
3. Set up environment variables
    Create a `.env` file in the root directory and add the following variables:
    ```plaintext
    PORT=3000
    MONGODB_URI=mongodb://localhost:27017/todoapp
    ```
4. Start the server
    ```bash
    npm run dev
    ```
5. Access the app
    Open your browser and go to `http://localhost:3000`
# API Endpoints
## Todos    
### Get all todos
- **URL**: `/getTodos`
- **Method**: `GET` 
- **Response**: 
  ```json
  [
    {
      "_id": "todo_id",
      "title": "Todo Title",
      "description": "Todo Description",
      "completed": false,
      "createdAt": "2023-10-01T00:00:00.000Z"
    }
  ]
  ```
### Create a new todo
- **URL**: `/createTodo` 
- **Method**: `POST`
- **Body**: 
  ```json
  {
    "title": "New Todo",
    "description": "Todo Description"
  }
  ```
- **Response**: 
  ```json
  {
    "_id": "new_todo_id",
    "title": "New Todo",
    "description": "Todo Description",
    "completed": false,
    "createdAt": "2023-10-01T00:00:00.000Z"
  }
  ```
### Update a todo
- **URL**: `/updateTodo/:id`
- **Method**: `PUT`
- **Body**: 
  ```json
  {
    "title": "Updated Todo",
    "description": "Updated Description",
    "completed": true
  }
  ```
- **Response**: 
  ```json
  {
    "_id": "todo_id",
    "title": "Updated Todo",
    "description": "Updated Description",
    "completed": true,
    "createdAt": "2023-10-01T00:00:00.000Z"
  }
  ```
### Delete a todo
- **URL**: `/deleteTodo/:id`
- **Method**: `DELETE`
- **Response**: 
  ```json
  {
    "message": "Todo deleted successfully"
  }
  ```
# License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

