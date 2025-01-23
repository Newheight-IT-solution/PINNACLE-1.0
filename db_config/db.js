import mongoose from "mongoose";

const connectdb = async () => {
    try{
        const connect = await mongoose.connect(process.env.MONGO_URI)
        return console.log(`connected successfully to: ${connect.connection.host}`)

    }catch(error){
        console.log("error", error)
        process.exit(1)
    }
}


export default connectdb