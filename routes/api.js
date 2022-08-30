const express=require('express')
const router=express.Router()
const taskController=require('../controllers/taskControllers')

router.get('/getAllTasks',taskController.getAllTasks);
router.post('/updateTask',taskController.updateTask);
router.post('/saveTask',taskController.saveTask);
router.delete('/deleteTask/:id',taskController.deleteTask)

module.exports=router

