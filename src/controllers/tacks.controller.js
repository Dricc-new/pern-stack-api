import { db } from "../dbconection.js";

// Show task list
export async function indexTask(req, res) {
    try {
        // Consul SQL
        const result = await db.query('SELECT * FROM task')
        res.json(result.rows)
    } catch (err) {
        res.json(err.message)
    }
}

// Get a task by id
export async function getTask(req, res) {
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
        res.json(err)
    }

}

// Create new task and save it to the database
export async function storeTask(req, res) {
    const { title, description, date } = req.body
    try {
        // Consult SQL
        const result = await db.query('INSERT INTO task (title, description, date) VALUES ($1, $2, $3) RETURNING *', [title, description, date])

        // Return new task
        res.send(result.rows[0])
    } catch (err) {
        res.json(err.message)
    }
}

//  Remove task
export async function deleteTask(req, res) {
    const { id } = req.params
    
    try{
        res.send('Delete task')
    }catch(err){
        res.json(err.message)
    }
}

// Update task
export async function updateTask(req, res) {
    try{
        res.send('Update task')
    }catch(err){
        res.json(err.message)
    }
}