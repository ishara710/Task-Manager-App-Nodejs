require('../src/db/mongoose')
const User = require('../src/models//user')

// User.findByIdAndUpdate('5eb84335b3a17921aedfea06', {age:20}).then((user) => {
//     console.log(user)
//     return User.countDocuments({age:0})
// }).then((result) => {
//     console.log(result)
// }).catch((e) => {
//     console.log(e)
// })

const updateAgeAndCount = async (id, age) => {
    const user = await User.findByIdAndUpdate(id, {age})
    const age = await User.countDocuments({age})
    return count
}

updateAgeAndCount('5eb84335b3a17921aedfea06', 2). then((count) => {
    console.log(count)
}).catch((e) => {
    console.log(e)
})