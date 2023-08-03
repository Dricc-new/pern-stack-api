import { db } from "../dbconection.js";

// Show task list
export async function indexTask(req, res, next) {
    try {
        // Consul SQL
        const result = await db.query('SELECT * FROM task')
        res.json(result.rows)
    } catch (err) {
        next(err)
    }
}

// Get a task by id
export async function getTask(req, res, next) {
    const { id } = req.params
    try {
        // Consult SQL
        const result = await db.query('SELECT * FROM task WHERE id = $1', [id])

        // If it is not found, it returns the 404 error
        if (result.rows.length === 0)
            return res.status(404).json({ mesage: 'Task not found' })
        // Return result
        res.json(result.rows[0])
    } catch (err) {
        next(err)
    }

}

// Create new task and save it to the database
export async function storeTask(req, res, next) {
    const { title, description, date } = req.body
    try {
        // Consult SQL
        const result = await db.query('INSERT INTO task (title, description, date) VALUES ($1, $2, $3) RETURNING *', [title, description, date])

        // Return new task
        res.send(result.rows[0])
    } catch (err) {
        next(err)
    }
}

//  Remove task
export async function deleteTask(req, res, next) {
    const { id } = req.params
    try {
        // Consult SQL
        const result = await db.query('DELETE FROM task WHERE id = $1', [id])
        
        // If the task is not found
        if (result.rowCount === 0)
            return res.status(404).json({ mesage: 'Task not found' })
        res.sendStatus(204)
    } catch (err) {
        next(err)
    }
}

// Update task
export async function updateTask(req, res, next) {
    const { id } = req.params
    const { title, description, date } = req.body
    try {
        // Consult SQL
        const result = await db.query('UPDATE task SET title = $1, description = $2, date = $3 WHERE id = $4 RETURNING *', [title, description, date, id])
        
        // If the task is not found
        if (result.rowCount === 0)
            return res.status(404).json({ mesage: 'Task not found' })
        
        // Return updated task
        res.json(result.rows[0])
    } catch (err) {
        next(err)
    }
}