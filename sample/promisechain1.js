require('../src/db/mongoose')
const Task = require('../src/models/task')

// const task = new Task({'description':'sample1','completed':false})
// task.save()
// Task.findByIdAndUpdate('607c0a483fad8a03eb1d4c39', {completed:false})
// .then((task)=>{console.log(task)})
// .catch((e)=>{console.log(e)})

// Task.find({}).then((task)=>{
//     console.log(task)
// }).catch((r)=>{console.log(r)})

// Task.find({}).then(()=>{
//    return Task.countDocuments({completed:false}).then((result)=>{
//        console.log(result)
//    })
//    }).catch((e)=>{console.log(e)})

 Task.findByIdAndDelete('607c19a1fc2cf10592d89b04')
 .then((task)=>{
     console.log(task)
     return Task.countDocuments({'completed':false})
 })
 .catch((error)=>{
     console.log(error)
 })
