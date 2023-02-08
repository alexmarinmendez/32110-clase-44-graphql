import Task from './models/Task.js'

const resolvers = {
    Query: {
        hello: () => 'Hola Mundo',
        getAllTasks: async () => {
            const tasks = await Task.find()
            return tasks
        },
    },
    Mutation: {
        createTask: async (parent, args, context, info) => {
            // console.log(parent, args, context, info)
            const { title, description } = args
            const newTask = new Task({ title, description })
            await newTask.save()
            return newTask
        }
    }
}

export default resolvers