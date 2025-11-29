import mongoose from "mongoose"

const mongodburl = process.env.MONGODB_URL

if (!mongodburl) {
    throw new Error("DB connection error")
}


let cached = global.mongoose
if(!cached) {
    cached = global.mongoose = {conn: null, promise: null}
}

const connectDb = async () => {
    if(cached.conn) {
        return cached.conn
    }

    if (!cached.promise) {
        cached.promise = mongoose.connect(mongodburl).then((conn) => conn.connection)
    }
    try {
        const conn = await cached.promise
        return conn
    } catch (error) {
        console.log(error)
    }
}
export default connectDb