import expenseSchema from "../Schema/expenseSchema.js";
import mongoose from "mongoose";


const expenseModel= mongoose.model('/expenseRecord',expenseSchema)


export default expenseModel