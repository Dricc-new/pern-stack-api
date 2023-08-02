import express from "express";
import { PORT } from "./config";
import morgan from "morgan";
import taskRouter from "./routes/tacks.routes";

const app = express()

app.use(morgan('dev'))

// Routers
app.use(taskRouter)

app.listen(PORT)
console.log('Server on port', PORT)