import Task from "../models/productmodel.js";


export const taskController={


    createTask: async (req, res) => {
        try {
          const { title, description, due_date, status } = req.body; // Destructure request body
          const task = new Task({
            title,
            description: description,
            due_date: due_date,
            status: status,
          });
          const savedTask = await task.save(); // Save the new task to the database
          res.status(201).json(savedTask); // Respond with the created task
        } catch (error) {
          res.status(400).json({ error: error.message }); // Bad Request
        }
    },


    getAllTasks: async (req, res) => {
        try {
          const tasks = await Task.find(); // Retrieve all tasks from the database
          res.status(200).json(tasks); // Respond with the list of tasks
        } catch (error) {
          res.status(500).json({ error: "Failed to retrieve tasks" }); // Internal Server Error
        }
    },



    getTaskById: async (req, res) => {
        try {
          const task = await Task.findById(req.params.id); // Find the task by ID
          if (!task) {
            return res.status(404).json({ error: "Task not found" }); // Not Found
          }
          res.status(200).json(task); // Respond with the found task
        } catch (error) {
          res.status(500).json({ error: "Failed to retrieve the task" }); // Internal Server Error
        }
    },


    updateTask: async (req, res) => {
        try {
          const { title, description, due_date, status } = req.body; // Destructure request body
          const task = await Task.findById(req.params.id); // Find the task by ID
          if (!task) {
            return res.status(404).json({ error: "Task not found" }); // Not Found
          }
    
          // Update task properties
          task.title = title || task.title;
          task.description = description || task.description;
          task.due_date = due_date || task.due_date;
          task.status = status || task.status;
          task.updated_at = new Date();
    
          const updatedTask = await task.save(); // Save the updated task
          res.status(200).json(updatedTask); // Respond with the updated task
        } catch (error) {
          res.status(400).json({ error: error.message }); // Bad Request
        }
      },


    deleteTask: async (req, res) => {
        try {
          const task = await Task.findByIdAndDelete(req.params.id); // Delete the task by ID
          if (!task) {
            return res.status(404).json({ error: "Task not found" }); // Not Found
          }
          return res.status(201).send({
            success:true,
            message:`Task Deleted Successfly`
          }); // No Content
        } catch (error) {
          res.status(500).json({ error: "Failed to delete the task" }); // Internal Server Error
        }
    },


    markTaskInProgress: async (req, res) => {
        try {
          const task = await Task.findById(req.params.id); // Find the task by ID
          if (!task) {
            return res.status(404).json({ error: "Task not found" }); // Not Found
          }
    
          
          if(task.status=="pending"){
            task.status = "in_progress";
          } 
          
          task.updated_at = new Date();
    
          const updatedTask = await task.save(); // Save the updated task
          res.status(200).json(updatedTask); // Respond with the updated task
        } catch (error) {
          res.status(500).json({ error: "Failed to update the task" }); // Internal Server Error
        }
    },

    markTaskAsComplete: async (req, res) => {
        try {
          const task = await Task.findById(req.params.id); // Find the task by ID
          if (!task) {
            return res.status(404).json({ error: "Task not found" }); // Not Found
          }
    
          task.status = "completed"; // Set task status to "completed"
          task.updated_at = new Date();
    
          const updatedTask = await task.save(); // Save the updated task
          res.status(200).json(updatedTask); // Respond with the updated task
        } catch (error) {
          res.status(500).json({ error: "Failed to update the task" }); // Internal Server Error
        }
    },
    
}


