// const express = require('express')
// const User = require('../models/user')
// const router = new express.Router()
// const auth = require('../middleware/auth')
// const multer = require('multer')

// // const upload = multer({
// //     dest:'images'
// // })

// // router.post('/users/upload' , upload.single('uploadprofile') , (req,res)=>{
// //     res.send()
// // })

// const upload = multer({
//     dest:'avatars',
//     limits:{
//         fileSize:1000000
//     },
//     fileFilter(req,file,cb){
//             if(!file.originalname.match(/\.(png|jpeg|jpg)$/)){
//                cb( new Error('file must be png jpeg jpg'))    
//             }
//             cb(undefined,true)
//     }
// })


// router.post('/users/me/avatar' , upload.single('avatar') ,async (req,res)=>{

//    req.user.avatar =  req.file.buffer
//    await req.user.save()
//     res.send()
// },(error,req,res,send)=>{
//     res.status(400).send({error: error.message})
// } )


// router.post('/register', async (req, res) => {
//     const user = new User(req.body)
// //res.send(user)
//     try {
//         await user.save()
//        // const token = await user.generateAuthToken()
//         res.status(201).send({ user })
//     } catch (e) {
//         res.status(400).send(e)
//     }

// })

// router.post('/users/login', async (req, res) => {
//     try {
//         const user = await User.findByCredentials(req.body.email, req.body.password)
      
//         const token = await user.generateAuthToken()
//         res.send({ user:user.getPublicProfile(), token })
//     } catch (e) {
//         res.status(400).send()
//     }
// })

// router.get('/users',async (req, res) => {
//     try {
//         const users = await User.find({})
//         res.send(users)
//     } catch (e) {
//         res.status(500).send()
//     }
// })

// // router.post('/users/logout' , auth ,async (req,res)=>{
// // try{
// //     req.user.tokens = req.user.tokens.filter( (token)=>{
// //             return token.token !== req.token
// //     } )
// //     await req.user.save()      
// //     res.send
// // }
// // catch(e){
// // res.status(500).send()
// // }
// // })

// router.post('/users/logout', auth, async (req, res) => {
//     try {
//         req.user.tokens = req.user.tokens.filter((token) => {
//             return token.token !== req.token
//         })
//         await req.user.save()

//         res.send()
//     } catch (e) {
//         res.status(500).send()
//     }
// })

// router.get('/users/me',auth,async (req, res) => {
//   res.send(req.user)
// })


// router.get('/users/:id', async (req, res) => {
//     const _id = req.params.id

//     try {
//         const user = await User.findById(_id)

//         if (!user) {
//             return res.status(404).send()
//         }

//         res.send(user)
//     } catch (e) {
//         res.status(500).send()
//     }
// })

// router.patch('/users/:id', async (req, res) => {
//     const updates = Object.keys(req.body)
//     const allowedUpdates = ['name', 'email', 'password', 'age']
//     const isValidOperation = updates.every((update) => allowedUpdates.includes(update))

//     if (!isValidOperation) {
//         return res.status(400).send({ error: 'Invalid updates!' })
//     }

//     try {
//         const user = await User.findById(req.params.id)

//         updates.forEach((update) => user[update] = req.body[update])
//         await user.save()

//         if (!user) {
//             return res.status(404).send()
//         }

//         res.send(user)
//     } catch (e) {
//         res.status(400).send(e)
//     }
// })

// router.delete('/users/me',auth ,async (req, res) => {
//     try {

//     // const user = await User.findByIdAndDelete(req.params.id)
//     res.send(user)
//     } catch (e) {
//         res.status(500).send()
//     }
// })


// router.get('/users/:id/avatar' , async (req,res)=>{

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

// module.exports = router



const express = require('express')
const User = require('../models/user')
const auth = require('../middleware/auth')
const router = new express.Router()

router.post('/users', async (req, res) => {
    const user = new User(req.body)

    try {
        await user.save()
        const token = await user.generateAuthToken()
        res.status(201).send({ user, token })
    } catch (e) {
        res.status(400).send(e)
    }
})

router.post('/users/login', async (req, res) => {
    try {
        const user = await User.findByCredentials(req.body.email, req.body.password)
        const token = await user.generateAuthToken()
        res.send({ user, token })
    } catch (e) {
        res.status(400).send()
    }
})

router.get('/users',async (req, res) => {
    try {
        const users = await User.find({})
        res.send(users)
    } catch (e) {
        res.status(500).send()
    }
})

router.post('/users/logout', auth, async (req, res) => {
    try {
        req.user.tokens = req.user.tokens.filter((token) => {
            return token.token !== req.token
        })
        await req.user.save()

        res.send()
    } catch (e) {
        res.status(500).send()
    }
})

router.post('/users/logoutAll', auth, async (req, res) => {
    try {
        req.user.tokens = []
        await req.user.save()
        res.send()
    } catch (e) {
        res.status(500).send()
    }
})

router.get('/users/me', auth, async (req, res) => {
    res.send(req.user)
})

router.get('/users/:id', async (req, res) => {
    const _id = req.params.id

    try {
        const user = await User.findById(_id)

        if (!user) {
            return res.status(404).send()
        }

        res.send(user)
    } catch (e) {
        res.status(500).send()
    }
})

router.patch('/users/:id', async (req, res) => {
    const updates = Object.keys(req.body)
    const allowedUpdates = ['name', 'email', 'password', 'age']
    const isValidOperation = updates.every((update) => allowedUpdates.includes(update))

    if (!isValidOperation) {
        return res.status(400).send({ error: 'Invalid updates!' })
    }

    try {
        const user = await User.findById(req.params.id)

        updates.forEach((update) => user[update] = req.body[update])
        await user.save()

        if (!user) {
            return res.status(404).send()
        }

        res.send(user)
    } catch (e) {
        res.status(400).send(e)
    }
})

router.delete('/users/:id', async (req, res) => {
    try {
        const user = await User.findByIdAndDelete(req.params.id)

        if (!user) {
            return res.status(404).send()
        }

        res.send(user)
    } catch (e) {
        res.status(500).send()
    }
})

module.exports = router