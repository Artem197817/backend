const path = require('path');
const ProductModel = require('../models/product');


class ProductController {

    static async getProduct(req, res) {

        const product = await ProductModel.getAll();

        res.render ('product', {
            title: 'Product Page',
            product: product,
        });
    }

}
module.exports = ProductController;