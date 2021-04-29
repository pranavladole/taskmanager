 // /users/pranav/mongodb/bin/mongod --dbpath=/users/pranav/mongodb-data
// const mongoose = require('mongoose')
// const express = require('express')
// require('./src/db/mongoose')
// const User = require('./src/models/user')
// const Task = require('./src/models/task')

// const userRouter = require('./src/routers/user')
// const taskRouter = require('./src/routers/task')
// const app = express()
// app.use(userRouter)
// app.use(taskRouter)
// const port = process.env.PORT || 3000

// app.use(express.json())

// // const router = new express.Router
// // router.get('/test' , (req,res)=>{
// // res.send('this is my new route')

// // })
// //  app.use(userRouter)

// // app.post('/users', async (req,res)=>{
// //     const user = new User({"name":"lado","age":100})
// //     user.save().then((result)=>{
// //         console.log("user saved")
// //     }).catch(()=>{})
   
// // })

// // app.get('/users', (req,res)=>{
// //     const user = User.find({}).then((user)=>{
// //         res.send(user)
// //     }).catch((e)=>{
// //         res.send(e)
// //     })
    
// // })

// // app.patch('/users/:id', async (req,res)=>{
// //     const updates  =Object.keys(req.body)
// //     const allowedUpdated = ['name','email','password','age']
// //     const isValidOperation = updates.every((updates)=> allowedUpdated.includes(updates))

// //     if(!isValidOperation){
// //         return res.status(200).send('invalid update')
// //     }
// //     try{
// //         const user = await User.findByIdAndUpdate(req.params.id ,req.body , { new :true , runValidators:true})
// //         if(!user){
// //             res.status(201).send()
// //         }
// //         res.send(user)
// //     }
// //     catch(e){
// // console.log(e)
// //     }
// //  })

// //  app.patch('/tasks', async (req,res)=>{
// //     const updates  =Object.keys(req.body)
// //     const allowedUpdated = ['description']
// //     const isValidOperation = updates.every((updates)=> allowedUpdated.includes(updates))

// //     if(!isValidOperation){
// //         return res.status(200).send('invalid update')
// //     }
// // try{
// //     const task = await Task.findByIdAndUpdate(req.params.id,req.body,{ new :true , runValidators:true})
// //     if(!task){
// //         res.status(201).send()
// //     }

// //     res.send(task)
// // }
// // catch(e){
// //     res.status(400).send('update not ')
// // }
// // })

// const multer = require('multer')

// const upload = multer({
//     dest:'images',
//     limits:{
//         fileSize:1000000
//     },
//     fileFilter(req,file,cb){

//         //  if(!file.originalname.endsWith('.pdf')){
//              if(!file.originalname.match(/\.(jpg|jpeg)$/)){
                
//             cb(new Error ('file must be word file')) 
//         }
//         cb(undefined,true)
//         // cb(new Error ('file must be PDF'))
//         // cb(undefined,true)
//         // cb()
//     }
// })

// // const middleware = (req,res,send)=>{
// //     throw new Error('from middleWare')
// // }

// app.post('/upload',upload.single('upload') , (req,res)=>{
//     res.send()
// },(error,req,res,send)=>{
//     res.status(400).send( {error: error.message})
// })

// // app.post('/upload',upload.single('upload') , (req,res)=>{
// //     res.send()
// // })
// app.get('/upload/:id/images' , async (req,res)=>{

//     try{
//          const user = User.findById(req.params.id)
//         if(!user || !user.avatar){
//             throw new Error()
//         }
//         res.set('Content-Type','image/jpg')
//         res.send(user.avatar)
//     }
//    catch(e){
//         res.status(404).send()
//    }
// })

// app.listen(port,()=>{
//     console.log("server is runing on prt"+port)
// })

const express = require('express')
require('./src/db/mongoose')
const app = express()
const port = process.env.PORT || 3000
const User = require('./src/models/user')
 const Task = require('./src/models/task')

 const userRouter = require('./src/routers/user')
 const taskRouter = require('./src/routers/task')

app.use(express.json())
 app.use(userRouter)
 app.use(taskRouter)
app.listen(port, () => {
    console.log('Server is up on port ' + port)
})
