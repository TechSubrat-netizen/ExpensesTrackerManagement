import expenseModel from "../Model/expenseModel.js";

//Add Data Functionalities
export const addData=async(req,res)=>{
    try {
        let data=req.body;
        await expenseModel.insertOne(data)
        res.status(201).json({msg:"Data inserted sucessfully"})
    } catch (error) {
        res.status(500).error({error:error.message})
    }
}
//Get Data Functionalities
export const getData=async(req,res)=>{
    try {
        let data=await expenseModel.find()
        res.status(202).json(data)
        
    } catch (error) {
        res.status(500).json({error:error.message})
    }
}
//Get Data by id for editing purpose
export const getDataById=async(req,res)=>{
    try {
        let  {id}=req.params
        id.trim()
        let data=await expenseModel.findOne({_id:id})
        res.status(202).json(data)
        
    } catch (error) {
        res.status(500).json({error:error.message})
    }
}
//Update Data Functionalities
export const updateData=async(req,res)=>{
    try {
        let id=req.params.id
        id = id.trim();
        const updatedExpense = await expenseModel.findByIdAndUpdate(id, req.body, { new: true });
        if(!updatedExpense){
            res.status(404).json({msg:"Data not found"})
        }
        res.status(200).json({msg:"Data updated succesfully",data:updatedExpense})
    } catch (error) {
        res.status(500).json({ message: 'Something went wrong', error: error.message });
    }
}
// Delete Data functionalities
 export const deleteData=async(req,res)=>{
    try {
        let {id}=req.params
        const deletedExpense = await expenseModel.findByIdAndDelete(id);

        if (!deletedExpense) {
          return res.status(404).json({ message: 'Expense not found' });
        }
    
        res.status(200).json({ message: 'Expense deleted successfully' });
    } catch (error) {
        res.status(500).json({message:"Something error here",error:error.message})
        
    }
 }