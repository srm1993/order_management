const ProductMasterModel = require('../Models/ProductMaster');
const OrderMasterModel = require('../Models/OrderMaster');
exports.placeOrder = async (req, res) => {
    const products = await ProductMasterModel.find();
    const orders = await OrderMasterModel.find();
    return res.render('PlaceOrder', { products: products,orders:orders });
}
exports.fetchProduct = async (req, res) => {
    const id = req.params.id;
    const product = await ProductMasterModel.findById(id);
    return res.json(product);
}
exports.makeOrder = async (req, res) => {
    const body = req.body;
    if (!body || !body.ProdId || !body.ProdRate || !body.OrderQty || !body.OrderValue) {
        const products = await ProductMasterModel.find();
        return res.render('PlaceOrder', { products: products });
    }
    const product = await ProductMasterModel.findById(body.ProdId);
    const order = await OrderMasterModel.create({
        ProdId: product,
        OrderDate: Date.now(),
        ProdRate: body.ProdRate,
        OrderQty: body.OrderQty,
        OrderValue: body.OrderValue
    });
    return res.redirect('/');
}