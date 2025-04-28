import mongoose from "mongoose";

const expenseSchema=new mongoose.Schema({
    amount:{type:Number,required:true},
    category:{type:String,required:true},
    description:{type:String},
    date:{type:Date,required:true}
})
export default expenseSchema