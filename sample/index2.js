//  /users/pranav/mongodb/bin/mongod --dbpath=/users/pranav/mongodb-data
const mongoose = require('mongoose')
const express = require('express')
require('./src/db/mongoose')
const User = require('./src/models/user')
const Task = require('./src/models/task')
const app = express()

const port = process.env.PORT || 3000

app.use(express.json())


app.post('/users', async (req,res)=>{
  const user = new User(req.body)

  try{
  await user.save()
  res.status(201).send()
  }
  catch (e){
res.status(400).send()
  }
// user.save()
// .then(()=>{
//     res.send(user)
// }).catch(()=>{})
})

// app.post('/users',(req,res)=>{
//   const user = new User(req.body)

// user.save().then(()=>{
//     res.send(user)
// }).catch(()=>{})
// })

app.get("/users", async (req,res)=>{
   
    try{
        const user  = await  User.find({})
 res.send(user)
    }
catch(e){
    console.log(e)
}
}
)

// app.get("/users",(req,res)=>{
   
//     User.find({}).then((user)=>{
//         res.send(user)
//     }).catch((e)=>{
//         res.send(e)
//     })
// })

// app.get('/users/:id',(req,res)=>{
//     const _id = req.params.id
//     User.findById(_id).then((user)=>{
//         if(!user)
//         {
//                return res.status(404).send()
//         }
//         res.send(user)
//     }).catch((e) =>{res.send(e)})
 
// })


//----------------------------------------
//task app

// app.post('/task',(req,res)=>{
//   const task = new Task(req.body)

//   task.save().then(()=>{
//       res.send(task)
//   }).catch((e)=>{
//       console.log(e)
//       res.send(e)
//   })

// })

// app.post('/task' , async (req,res)=>{

//     const task = await Task(req.body)
//     try{
//         task.save()
//         res.status(201).send()
//         console.log(task)
//     }
//     catch(e){
//         console.log(e)
//         res.status(400).send()
//     }
// })

// app.get("/tasks",(req,res)=>{
//     Task.find({}).then((task)=>{
//         res.send(task)
//     }).catch((e)=>{res.send(e)})
// })

// app.get("/tasks", async(req,res)=>{
//     try{
//    const task = await Task.find({})
// res.send(task)
//     }
//     catch(e)
//     {
//         res.status(401).send
//         console.log(e)
//     }
   
// })

//app.delete('/users/:id' , async (req,res)=>{
    //     try{ 
    // const user = await User.findByIdAndDelete(req.params.id)
    // if(!user){
    //     res.status(404).send()
    // }
    // res.send(user)
    //     }
    //     catch (e){
    //         console.log(e)
    //     }
    // } )

// app.get('/tasks/:id',(req,res)=>{
//     const _id = req.params.id
//     console.log(_id)
//     Task.findById(_id).then((task)=>{

//         if(!task){return res.status(404).send()}
//         res.send(task)
//     })
//     .catch((e)=>{res.send(e)})
 
// })



app.listen(port,()=>{
    console.log("server is runing on prt"+port)
})