import userModel from "../Model/userModel,js";
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
//Signup user
let saltRound=10
 let secretKey="LiaplusAi@123"
const generateToken = (id) => {
    let studentId = id.toString()
    let token = jwt.sign(studentId, secretKey)
    return token
}

export const userSignup= async(req,res)=>{
    try {
        const user=req.body;
        let hashedPassword= await bcrypt.hash(user.password,saltRound) 
        let userUpload=await userModel.insertOne({...user,password:hashedPassword})
        res.status(200).json({msg:"Data inserted successfull",token:generateToken(userUpload._id)})  
    } catch (error) {
        res.status(500).json({message:"Something went wrong",error:error.message})
    }
}
//Signin or Login user

export const userSignin=async(req,res)=>{
    try {
        const {email,password}=req.body;

        if(email && password){

            let verifyUserEmail=await userModel.findOne({email:email})

            if(verifyUserEmail){

                let verifyUserPassword=await bcrypt.compare(password,verifyUserEmail.password)

                if(verifyUserPassword){

                  res.status(200).json({msg:`${verifyUserEmail.name} login succesful,`,token:generateToken(verifyUserEmail._id)})

                }
                else{
                    res.status(400).json({msg:"Wrong Password"})
                }
            }
            else{
                res.status(404).json({msg:"User not found"})
            }
        }
        else{
            res.status(400).json({msg:"Please fillup all the field"})
        }

    } catch (error) {

        res.status(500).json({msg:"Something went wrong"})

    }
}
