const mongoose = require('mongoose');
const OrderMaster = new mongoose.Schema({
    ProdId: {
        required: true,
        type: Object
    },
    OrderDate: {
        required: true,
        type: Date
    },
    ProdRate: {
        required: true,
        type: Number
    },
    OrderQty: {
        required: true,
        type: Number
    },
    OrderValue: {
        required: true,
        type: Number
    }
})
const OrderMasterModel = mongoose.model('ordermaster', OrderMaster);
module.exports = OrderMasterModel;