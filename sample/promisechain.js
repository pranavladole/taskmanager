require('../src/db/mongoose')
const User = require('../src/models/user')

User.findByIdAndUpdate('607c091905206203cce0b9cb',{age:23})
.then((user)=>{
    console.log(user)
    return User.countDocuments({age:1})
})
.catch(()=>{})