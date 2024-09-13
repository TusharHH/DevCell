const express = require('express')
const router = express.Router()

const { addToDo, getToDo, updateToDo, deleteToDo } = require('../controllers/todoController')

router.post("/addToDo",addToDo);
router.patch("/updateToDo/:id",updateToDo);
router.delete("/deleteToDo/:id",deleteToDo);
router.get("/getToDo",getToDo);

module.exports = router
