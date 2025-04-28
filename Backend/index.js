import express from 'express'
import connectDB from './config/db.js';
import expenseRouter from './Routing/expenseRouter.js';
import userRouter from './Routing/userRouter.js';
import cors from 'cors'
 const app=express()

//Midlleware
app.use(express.json())
app.use(cors())


//Routing
app.use('/expenses',expenseRouter)
app.use('/user',userRouter)



//Database Connection
connectDB()


//Server starting
 app.listen(3000,"localhost",()=>{
    console.log("server is running on http://localhost:3000");
    
 })