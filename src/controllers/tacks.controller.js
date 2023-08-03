import { db } from "../dbconection.js";

export async function indexTask(req, res) {
    try{
        const result = await db.query('SELECT * FROM task')
        res.json(result.rows)
    }catch(err){
        res.json(err.message)
    }
}

export async function getTask(req, res) {
    res.send('A tasks')
}

export async function storeTask(req, res) {
    const { title, description, date } = req.body
    try {
        const result = await db.query('INSERT INTO task (title, description, date) VALUES ($1, $2, $3) RETURNING *', [title, description, date])
        res.send(result.rows[0])
    } catch (err) {
        res.json(err.message)
    }
}

export async function deleteTask(req, res) {
    res.send('Delete task')
}

export async function updateTask(req, res) {
    res.send('Update task')
}