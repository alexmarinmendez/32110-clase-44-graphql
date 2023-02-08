import { connect } from 'mongoose'

const connectDB = async() => {
    try {
        await connect("mongodb://localhost/tasksdb")
        console.log('MongoDB connected!')
    } catch(err) {
        console.log(err)
    }
}

export default connectDB