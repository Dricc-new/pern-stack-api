import { Router } from "express";
import { deleteTask, getTask, indexTask, storeTask, updateTask } from "../controllers/tacks.controller.js";

const taskRouter = Router()

// Returning all task on database
taskRouter.get('/tasks', indexTask)

// This route returns a task by its id.
taskRouter.get('/tasks/:id', getTask)

// This route create a task on database
taskRouter.post('/tasks', storeTask)

// This route remove a task on database
taskRouter.delete('/tasks/:id', deleteTask)

// This route update a task on database
taskRouter.put('/tasks/:id', updateTask)

export default taskRouter