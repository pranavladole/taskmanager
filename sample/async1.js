require('../src/db/mongoose')
const   User =  require('../src/models/user')
const Task = require('../src/models/task')

// const updateAgeAndCount = async (id,age) =>{
//     const user = await User.findByIdAndUpdate(id,{age})
//     const count = await User.countDocuments({age})
//    return count
// }

// updateAgeAndCount('607c08e2349f4003bf3881c4',99)
// .then((count)=>{
//     console.log(count)
// }).catch((e)=>{
//     console.log(e)
// })

const deleteTask = async (id)=>{
    const task = Task.findById('607c5baaf17e530387a27d51')
    const dtask = await Task.deleteOne(task)
return dtask
}

deleteTask('607c5baaf17e530387a27d51').then((result)=>{
    console.log("deleted")
}).catch((e)=>{
    console.log(e)
})

