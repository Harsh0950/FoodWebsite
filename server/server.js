const express=require('express')
const app=express()
require('colors')
const router=require('./routes/foodroute')
const cors=require('cors')
//middlewares
app.use(express.json())
app.use(cors())//allow access to frontend fetch data from backend
app.use('/foods',router)//localhost:5000/foods

//database connection
const mongoose=require('mongoose');
const url="mongodb+srv://user:user@cluster0.whh0d.mongodb.net/tastyfood"
mongoose.connect(url).then(()=>{
    console.log('database connected'.bgCyan.black)
}).then(()=>{
    app.listen(5000)
}).catch((err)=>{
    console.log(err)
})


app.get('/',(req,res)=>{
    res.json({message:'hi'})
})