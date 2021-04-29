// const express = require('express')
// const app = express()

// const port = process.env.PORT || 3000

// app.use(express.json())

// app.post('/users' , (req,res)=>{
//     console.log(req.body)
// res.send("testing.....")
// })



// app.listen(port , ()=>{
//     console.log("server is on Port " + port)
// })


const express = require('express')
const Task = require('../src/models/task')

const app = express()
const port = process.env.PORT || 3000
const task = require('../src/models/task')
app.use(express.json())

app.post('/users', (req, res) => {
   
console.log(req.body)
   
})


app.get('/users' , (req,res)=>{
    Users.find({}),then((users)=>{
        res.send(users)
    }).catch(()=>{})
} )

app.post( '/tasks' , (req,res)=>{
const task = new Task(req.body)

task.save().then(()=>{
    res.send(task)
}).catch((e)=>{

    res.status(400).send(e)


})
})

app.listen(port, () => {
    console.log('Server is up on port ' + port)
})
