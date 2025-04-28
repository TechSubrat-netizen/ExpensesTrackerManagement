
import express from 'express'
import { addData, deleteData, getData, getDataById, updateData } from '../Controller/expenseController.js'

const expenseRouter=express.Router()
//Add Expenses
expenseRouter.post('/add',addData)

// Get all the expenses
expenseRouter.get('/get',getData)
//Get expenses by id
expenseRouter.get('/getbyId/:id',getDataById)

// Update  the expenses
expenseRouter.put('/update/:id',updateData)

//Delete expenses

expenseRouter.delete('/delete/:id',deleteData)



export default expenseRouter