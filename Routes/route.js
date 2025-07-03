const ProductController=require('../Controllers/ProductController');
const express=require('express');
const router=express.Router();
router.get('/',ProductController.placeOrder);
router.get('/fetchProduct/:id',ProductController.fetchProduct);
router.post('/makeOrder',ProductController.makeOrder);
module.exports=router;