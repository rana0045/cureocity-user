import mongoose from 'mongoose'
const { MONGO_URI } = process.env

if (!MONGO_URI) {
    throw new Error("invalid env ")
}


export const connectionToMonogoDB = async () => {
    try {
        const { connection } = await mongoose.connect(MONGO_URI)

        if (connection.readyState === 1) {
            return Promise.resolve(true)
        }
    } catch {
        return Promise.reject(error)
    }
}