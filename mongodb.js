// const mongodb = require('mongodb')
// const MongoClient = mongodb.MongoClient
// const ObjectID = mongodb.ObjectID
const { MongoClient, ObjectID} = require('mongodb')

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'
// const id = new ObjectID()
// console.log(id)

MongoClient.connect(connectionURL,{useUnifiedTopology: true}, (error, client) => {
    if(error) {
       return console.log(('Unable to connect to database!'))
    }

    const db = client.db(databaseName)
    // db.collection('users').insertOne({
    //     name: 'Ishara',
    //     age: 21
    // }, (error,result) => {
    //     if(error) {
    //         console.log('Unable to insert user')
    //     }

    //     console.log(result.ops)
    // })

    // db.collection('users').insertMany([ {
    //     name: 'Josh',
    //     age: 15
    // }, {
    //     name: 'Tez',
    //     age: 6
    // }
    
    // ] , (error,result) => {
    //     if(error) {
    //         console.log('Unable to insert documents!')
    //     }
    
    //     console.log(result.ops)
    // })

    // db.collection('tasks').insertMany([ {
    //     description: 'Complete the Node course',
    //     completed: false
    // }, {
    //     description: 'Complete C# Course',
    //     completed: true
    // },
    // {
    //     description: 'Move on to Hackkerank questions',
    //     completed: false
    // }
    
    // ] , (error,result) => {
    //     if(error) {
    //         console.log('Unable to insert tasks!')
    //     }
    
    //     console.log(result.ops)
    // })

    // db.collection('users').findOne({name:'Josh'}, (error,result) => {
    //    if (error) {
    //     console.log('Unable to fetch')
    //    } 

    //    console.log(result)
    // })
    // db.collection('users').updateOne({
    //     _id: new ObjectID('5eb62eff47ac4a1112720572')
    // },{
    //     $set: {
    //         name: 'Bhavya'
    //     }
    // }).then((result) => {
    //     console.log(result)
    // }).catch((error) => {
    //     console.log(error)
    // })
    db.collection('tasks').updateMany({
        completed: false
    }, {
        $set: {
            completed: true 
        }
    }).then((result) => {
        console.log(result)
    }).catch((error) => {
        console.log(error)
    })
    
})


