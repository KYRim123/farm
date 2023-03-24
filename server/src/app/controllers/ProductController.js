import { productModel } from "../Models/product.js"

 class ProductController{
    getProduct(req, res, next) {
      // if classify exists return limit and skip = 0 otherwise limit = 12 and skip = (page-1) * 12 
         productModel.find({}).limit(req.query.classify ? 0 : 12).skip(req.query.classify ? 0 : (req.query.page-1)*12)
         .then(product => {
            const classify = req.query.classify || 0
            const newData = product.filter(product =>  classify.length >= 1 ? classify.includes(product.typePot) : true)
            res.status(200).json(newData)
         })
         .catch(next)
     }

    detail(req, res, next) {
      productModel.findOne({_id: req.query.id})
         .then(detail => res.status(200).json(detail))
         .catch(next)
    }
}

export default ProductController = new ProductController