const taskService = require('../services/taskService')

const saveTask = async (req, res) => {
    try {
        let task = await taskService.saveTask(req.body)
        res.status(200).json({ newTask: task })
    }
    catch (err) {
        res.status(500).json({err:err.message})
    }
}

const getAllTasks = async (req, res) => {
    try {
        let tasks = await taskService.getAllTasks()
        res.status(200).json({ tasks: tasks })
    }
    catch (err) {
        res.status(500).json({err:err.message})
    }
}

const updateTask = async (req, res) => {
    try {
        await taskService.updateTask(req.body)
        res.status(200).json("succes")
    }
    catch (err) {
        res.status(500).json({ err: err })
    }
}

const deleteTask = async (req, res) => {
    try {
        await taskService.deleteTask(req.params.id)
        res.status(200).json("succes")
    }
    catch (err) {
        res.status(500).json({ err: err })
    }
}

module.exports = {saveTask,getAllTasks,updateTask,deleteTask}