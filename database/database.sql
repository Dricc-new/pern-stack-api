CREATE DATABASE db_pern_task

CREATE TABLE task(
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) UNIQUE,
    descripcion TEXT,
)