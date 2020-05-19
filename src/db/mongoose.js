const mongoose = require('mongoose')


mongoose.connect(process.env.MONGODB_URL, {
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
})


// const me = new User({
//     name: '         Ishara           ',
//     email: 'ISHARAMAHAPATRA2@GMAIL.COM',
//     age: 21
// })

// me.save().then(() => {
//     console.log(me)
// }).catch((error) => {
//     console.log('Error', error)
// })

// const manager = new Tasks({
//     description: 'Complete the Machine Learning',
//     completed: false
// })

// manager.save().then(() => {
//     console.log(manager)
// }).catch((error) => {
//     console.log('Error', error)
// })

