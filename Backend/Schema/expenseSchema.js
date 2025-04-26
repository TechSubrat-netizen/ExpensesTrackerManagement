import mongoose from "mongoose";

const expenseSchema=new mongoose.Schema({
    Amount:{type:Number,required:true},
    Category:{type:String,required:true},
    Description:{type:String},
    Date:{type:Date,required:true}
})
export default expenseSchema