const mongoose=require('mongoose');
const ProductMaster=new mongoose.Schema({
    ProdName:{
        required:true,
        type:String
    },
    ProdRate:{
        required:true,
        type:Number
    },
    ProdQty:{
        required:true,
        type:Number
    }
})
const ProductMasterModel=mongoose.model('productmaster',ProductMaster);
module.exports=ProductMasterModel;