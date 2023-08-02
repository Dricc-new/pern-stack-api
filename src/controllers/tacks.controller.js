import { db } from "../dbconection.js";

export async function indexTask(req, res) {
    // const result = await db.query('SELECT NOW()')
    res.json('exited')
}

export async function getTask(req, res) {
    res.send('A tasks')
}

export async function storeTask(req, res) {
    res.send('Create task')
}

export async function deleteTask(req, res) {
    res.send('Delete task')
}

export async function updateTask(req, res) {
    res.send('Update task')
}