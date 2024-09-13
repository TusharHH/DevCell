const todos = require('../models/todoSchema.js')

exports.addToDo = async (req, res) => {
    try {
        const todo = new todos(req.body.title, req.body.description);
        await todo.save();
        res.json({
            "message": "okay!!"
        })
    } catch (error) {
        res.json({
            "error": error
        })
        console.log(error);
        
    }
}

exports.getToDo = async (req, res) => {
    try {
        const data = await todos.find()
        res.json({
            data: data
        })
    } catch (error) {
        res.json({
            "error": error
        })

    }
}

exports.updateToDo = async (req, res) => {
    try {
        await todos.findByIdAndUpdate(
            req.params.id,
            req.body
        )
        res.json({
            "message": "okay!!"
        })
    } catch (error) {
        res.json({
            "error": error
        })
    }
}

exports.deleteToDo = async (req, res) => {
    try {
        await todos.findOneAndDelete(
            req.params.id
        )
    } catch (error) {
        res.json({
            "error": error
        })
    }
}

