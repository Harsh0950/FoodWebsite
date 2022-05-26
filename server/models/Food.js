const mongoose=require('mongoose')
const Schema=mongoose.Schema;
const foodSchema=new Schema({
    name:{
        type:String,
        required:true
    },
    varients:[],
    prices:[],
    category:{
        type:String,
        required:true
    },
    image:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    }
},{timeStamps:true})
module.exports=mongoose.model('Food',foodSchema);