const express = require("express");
const todoController = require("../controllers/todo.controller");
const router = express.Router();

router.post("/", todocontroller.createTodo);

module.exports = router;