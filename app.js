const express = require('express')
const todoRoutes = require("../../Downloads/todo-tdd-main/routes/todo.routes")
const app = express()
const mongodb = require("../../Downloads/todo-tdd-main/mongodb/mongodb.connect")

mongodb.connect();

app.use(express.json());

app.use((error, req, res, next) => {
    console.log(error);
    res.status(500).json({ message: error.message });
});

app.use("/todos", todoRoutes);

app.get('/', (req, res) => {
    res.send('Express test')
    })

module.exports = app