import { productModel } from "../Models/product.js"

class ProductController {
   getProduct(req, res, next) {
      const page = req.query.page
      const limit = 12
      const allClassify = ['circle', 'rectangle', 'square']
      const sortBy = req.query.sortBy
      let classify = req.query.classify || 'All'

      classify === 'All' ? (classify = [...allClassify]) :
         (typeof classify === 'string' ? classify = req.query.classify.split() : classify = req.query.classify);  

      const countPage = productModel.find().countDocuments()
         .then(count => Math.ceil(count / limit))
         .catch(error => error)

      const getProducts = productModel.find({})
         .where('typePot')
         .in([...classify])
         .limit(limit).skip((page - 1) * limit)
         .sort(sortBy !== "default" ? { priceNew: sortBy } : {})
         .then(products => products)
         .catch(error => error)

      Promise.all([countPage, getProducts])
         .then(([countPage, products]) => res.status(200).json({ countPage, products}))
   }

   detail(req, res, next) {
      productModel.findOne({_id: req.query.id})
         .then(detail => res.status(200).json(detail))
         .catch(next)
   }
}

export default ProductController = new ProductController