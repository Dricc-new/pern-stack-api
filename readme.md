# PERN-STACK-API
Small backend example for the PERN-STACK project, in this we use Express to mount the server and PostgreSQL as the database.
## Required
- PostgreSQL
- NodeJS 20.5.0+
## Dependencies
- cors 2.8.5+
- express 4.18.2+
- morgan 1.10.0+
- pg 8.11.2+
## Routes
- ### /tasks 
    - GET : Returning all task on database
    - POST : This route create a task on database

- ### /tasks/:id
    - GET : This route returns a task by its id.
    - PUT : This route update a task on database
    - DELETE : This route remove a task on database