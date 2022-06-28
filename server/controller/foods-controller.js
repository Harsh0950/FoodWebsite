const { findByIdAndUpdate } = require('../models/Food');
const Food=require('../models/Food')
const getAllFoods=async (req,res,next)=>{
    let foods;
    try {
        foods=await Food.find()
    } catch (error) {
        console.log(error)
    }
    if(!foods)
    {
        return res.status(404).json({message:"No data found"})
    }
    return res.status(200).json({foods})

}
const addFood=async (req,res,next)=>{
    let food;
    const {name,varients,prices,category,image,description}=req.body;
    try{
        food=new Food({
            name,
            varients,
            prices,
            category,
            image,
            description
        })
        await food.save()
    }
    catch(err)
    {
        console.log(err)
    }
    if(!food)
    {
        return res.status(500).json({message:"Not able to add food"})
    }
    return res.status(201).json({food})
};
const getid=async (req,res,next)=>{
    const id=req.params.id;
    let food;
    try{
    food=await Food.findById(id)
    }
    catch(err){
        console.log(err)
    }
    if(!food)
    return res.status(404).json({message:"No food found"})
    return res.status(200).json({food})
}
const updateFood=async (req,res,next)=>{
        const id=req.params.id;
        let food;
        const {name,varients,prices,category,image,description}=req.body;
        try{
            food=await Food.findByIdAndUpdate(id,{
                name,
                varients,
                prices,
                category,
                image,
                description,
            })
           await food.save()
        }
        catch(err)
        {
            console.log(err)
        }
        if(!food)
        {
            return res.status(404).json({message:"Not able to update food"})
        }
        return res.status(201).json({food})
    
}
const deleteFood=async (req,res,next)=>{
    const id=req.params.id;
    let food;
    try {
        food=Food.findByIdAndRemove(id)
        
    } catch (err) {
        console.log(err)
    }
    if(!food)
    {
        return res.status(404).json({message:"Not able to delete food"})
    }
    return res.status(200).json({message:"Product deleted successfully"})

};

exports.getAllFoods=getAllFoods;
exports.addFood=addFood;
exports.getid=getid;
exports.updateFood=updateFood;
exports.deleteFood=deleteFood;