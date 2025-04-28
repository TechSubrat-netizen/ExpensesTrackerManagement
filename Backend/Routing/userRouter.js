import express from 'express'
import { userSignin, userSignup } from '../Controller/userController.js'
const  userRouter=express.Router()
//Signup user
userRouter.post('/signup',userSignup)
//Login user
userRouter.post('/signin',userSignin)


export default userRouter