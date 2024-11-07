const path = require('path');
const ProductModel = require('../models/product');


class ProductController {

    static async getProduct(req, res) {

        const product = await ProductModel.getAll();

        res.sendFile (path.resolve(__dirname + '/../views/product.html'));
    }

}
module.exports = ProductController;