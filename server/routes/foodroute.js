const express=require('express')
const router=express.Router()
const Food=require('../models/Food')//getting food model
const foodsController=require('../controller/foods-controller')

// this route will bring all food
router.get('/', foodsController.getAllFoods)
//this route will add food
router.post('/',foodsController.addFood)
router.get('/:id',foodsController.getid)
router.put('/:id',foodsController.updateFood)
router.delete('/:id',foodsController.deleteFood)
module.exports=router;