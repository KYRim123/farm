import { productModel } from "../Models/product.js"
class ProductController {

   getProduct(req, res, next) {
      const page = req.query.page
      const limit = 12
      const allClassify = ['circle', 'rectangle', 'square']
      let classify = req.query.classify || 'All'
   
      classify === 'All' ? (classify = [...allClassify]) : 
      (typeof classify === 'string' ? classify = req.query.classify.split(","): classify = req.query.classify);
      
       productModel.find({}).where('typePot').in([...classify]).limit(limit).skip((page - 1) * limit)
         .then(product => res.status(200).json(product))
         .catch(next)
   }

   detail(req, res, next) {
      productModel.findOne({ _id: req.query.id })
         .then(detail => res.status(200).json(detail))
         .catch(next)
   }
}

export default ProductController = new ProductController