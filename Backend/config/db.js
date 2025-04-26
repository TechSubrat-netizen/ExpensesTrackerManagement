import mongoose from "mongoose";
let dbUrl='mongodb://127.0.0.1:27017/Expenses'
const connectDB=async()=>{
    try {
        await mongoose.connect(dbUrl)
        console.log("Database is  connected"); 
    } catch (error) {
        console.log(error)
    }
}
export default connectDB








