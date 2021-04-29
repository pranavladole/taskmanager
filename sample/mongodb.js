// const mongodb = require('mongodb')
// const MongoClient = mongodb.MongoClient

const {MongoClient , ObjectID} = require('mongodb')

const connectionURL ='mongodb://127.0.0.1:27017' 
const databaseName ='task-manager'
const id = new ObjectID
console.log(id)
console.log(id.getTimestamp())



MongoClient.connect( connectionURL , {useNewUrlParser:true} , 
    
    (error,client)=>{
        if (error)
        {
            return console.log("unable to connect")
        }
        console.log("connected successfully")

        const db = client.db(databaseName)

        db.collection('users').insertOne(
            
            

            {
                _id:id,
            name:'zz',
            age:1
            }

        
            , (error,result)=>{
            if(error){
                console.log("error")
            }
            console.log(result.ops)
        }
        )


    } )