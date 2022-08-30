const repository = require("../repository/repository")
const Task = require("../models/task")

const saveTask = async (task) => {
    //fields for schedule events arry
    task.start= new Date(),
    task.end= new Date(task.deadline)
    let newTask = new Task(task);
    try {
        console.log(newTask);
       let myTask = await repository.saveObject(newTask)
       return myTask;
    }
    catch (err) {
        return err;
    }
}
const getAllTasks = async () => {
    try {
        let tasks = await repository.getAllCollection(Task)
        return tasks;
    }
    catch (err) {
        return err;
    }
}

const updateTask = async (task) => {
    try {
         await repository.updateObject(Task,task._id,task)
        return 
    }
    catch (err) {
        return err;
    }
}

const deleteTask = async (id) => {
    try {
        await repository.deleteObject(Task,id)
        return
    }
    catch (err) {
        res.status(500).json({ err: err })
    }
}

module.exports = { saveTask,getAllTasks,updateTask,deleteTask}
