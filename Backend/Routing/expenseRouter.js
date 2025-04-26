
import express from 'express'
import { addData, deleteData, getData, updateData } from '../Controller/expenseController.js'

const expenseRouter=express.Router()
//Add Expenses
expenseRouter.post('/add',addData)

// Get all the expenses
expenseRouter.get('/get',getData)

// Update  the expenses
expenseRouter.put('/update/:id',updateData)

//Delete expenses

expenseRouter.delete('/delete',deleteData)



export default expenseRouter