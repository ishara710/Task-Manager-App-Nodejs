require('../src/db/mongoose')
const Task = require('../src/models//task')

Task.findByIdAndDelete('5eb84335b3a17921aedfea06').then((task) => {
    console.log(task)
    return Task.countDocuments({complete: false})
}).then((result) => {
    console.log(result)
}).catch((e) => {
    console.log(e)
})

const deleteTaskAndCount = async (id) => {
    const task = await Task.findByIdAndDelete(id)
    const count = await Task.countDocuments({completed: false})
    return count
}

deleteTaskAndCount('5eb84335b3a17921aedfea06').then((count) => {
    console.log(count)
}).catch((e) => {
    console.log(e)
})

