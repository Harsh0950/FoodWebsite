const User=require('../models/userModel')
const getAllUsers=async (req,res,next)=>{
    let users;
    try {
        users=await User.find()
    } catch (error) {
        console.log(error)
    }
    if(!users)
    {
        return res.status(404).json({message:"No data found"})
    }
    return res.status(200).json({users})

}

const adduser=async (req,res,next)=>{
    let User;
    const {name,email,password,isAdmin}=req.body;
    try{
        User=new User({
            name,
            email,
            password,
            isAdmin
        })
        await User.save()
    }
    catch(err)
    {
        console.log(err)
    }
    if(!User)
    {
        return res.status(500).json({message:"Not able to add User"})
    }
    return res.status(201).json({User})
};
