import express from 'express'
import connectDB from './config/db.js';
import expenseRouter from './Routing/expenseRouter.js';
 const app=express()

//Midlleware
app.use(express.json())
app.use(cors())


//Routing
app.use('/expenses',expenseRouter)



//Database Connection
connectDB()


 //Server starting
 app.listen(3000,"localhost",()=>{
    console.log("server is running on http://localhost:3000");
    
 })