import { productModel } from "../Models/product.js"

 class ProductController{
    getProduct(req, res, next) {
         productModel.find({}).limit(12).skip((req.query.page-1) * 12)
            .then(product => res.status(200).json(product))
            .catch(next)
    }
    detail(req, res, next) {
      productModel.findOne({_id: req.query.id})
         .then(detail => res.status(200).json(detail))
         .catch(next)
    }
}

export default ProductController = new ProductController