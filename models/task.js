const mongoose = require('mongoose')

const taskSchema = mongoose.Schema({
    title: String,
    deadline: String,
    description: String,
    frequency: Number,
    start:Date,
    end:Date,  
    priority: Number,
    startDate: Date,
    status: Boolean
})

module.exports = mongoose.model('Task', taskSchema)