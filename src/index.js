import express from "express";
import { PORT } from "./config.js";
import morgan from "morgan";
import taskRouter from "./routes/tacks.routes.js";

const app = express()

app.use(morgan('dev'))
app.use(express.json())

// Routers
app.use(taskRouter)
app.use((err, req, res, next) => {
    return res.json({
        message: err.message
    })
})

app.listen(PORT)
console.log('Server on port', PORT)