// const mongodb = require('mongodb')
// const MongoClient = mongodb.MongoClient

const {MongoClient , ObjectID} = require('mongodb')

const connectionURL ='mongodb://127.0.0.1:27017' 
const databaseName ='task-manager'
// const id = new ObjectID
// console.log(id)
// console.log(id.getTimestamp())



MongoClient.connect( connectionURL , {useNewUrlParser:true} , 
    
    (error,client)=>{
        if (error)
        {
            return console.log("unable to connect")
        }
        console.log("connected successfully")

        const db = client.db(databaseName)

       const dbupdate = db.collection("users").updateOne({ 
           _id : new ObjectID('60793735eec7d309cb86bd54')},
           {
                $set:{
                 name:"john"
                }
            },
            {
                $inc:{
                    age: 1
                }
            }
            
            
            )

            dbupdate.then( (result)=>{
                console.log(result)
            }).catch((error)=>{
                console.log(error)
            })

    
})
         