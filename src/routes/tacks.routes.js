import { Router } from "express";

const taskRouter = Router()

// Returning all task on database
taskRouter.get('/tasks', (req, res) => {
    res.send('List tasks')
})

// This route returns a task by its id.
taskRouter.get('/tasks/1', (req, res) => {
    res.send('A tasks')
})

// This route create a task on database
taskRouter.post('/tasks', (req, res) => {
    res.send('Create task')
})

// This route remove a task on database
taskRouter.delete('/tasks', (req, res) => {
    res.send('Delete task')
})

// This route update a task on database
taskRouter.put('/tasks', (req, res) => {
    res.send('Update task')
})

export default taskRouter