// const express = require('express')


// const app = express()
// const port = process.env.PORT || 3000

// app.use(express.json())
// const bcrypt = require('bcryptjs')

// const myFunction = async () =>{
// const password = 'Red12345!'
//  const epassword = await bcrypt.hash(password,8)
//  console.log(password)
//  console.log(epassword)

//  const match = await bcrypt.compare('ed12345!',epassword)
//  console.log(match)
// }

// myFunction()




// app.listen(port, () => {
//     console.log('Server is up on port ' + port)
// })

const express = require('express')
require('../src/db/mongoose')
const userRouter = require('../src/routers/user')
const taskRouter = require('../src/routers/task')

const app = express()
const port = process.env.PORT || 3000

app.use(express.json())
app.use(userRouter)
app.use(taskRouter)

app.listen(port, () => {
    console.log('Server is up on port ' + port)
})

const bcrypt = require('bcryptjs')

const myFunction = async () => {
    const password = 'Red12345!'
    const hashedPassword = await bcrypt.hash(password, 8)

    console.log(password)
    console.log(hashedPassword)

    const isMatch = await bcrypt.compare('red12345!', hashedPassword)
    console.log(isMatch)
}

myFunction()
