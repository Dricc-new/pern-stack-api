import { config } from "dotenv"
config()

export const PORT = process.env.PORT || 3000
export const DB_HOST = process.env.DB_HOST || 'localhost'
export const DB_PORT = process.env.DB_PORT || '5432'
export const DB_DATABASE = process.env.DB_DATABASE || 'db_pern_task'
export const DB_USER = process.env.DB_USER || 'postgres'
export const DB_PASSWORD = process.env.DB_PASSWORD || 'Qwe123asd'