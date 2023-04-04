import { cartModel } from "../Models/cart.js";

class CartController {
    getProduct(req, res, next) {
        const listCart = cartModel.find({})
            .then(product => product)
            .catch(next)

        const qtyCart = cartModel.find().countDocuments()
            .then(qty => qty)
            .catch(err => err)

        Promise.all([qtyCart, listCart])
            .then(([qtyCart, listCart]) => res.status(200).json({ qtyCart, listCart }))
            .catch(err => res.status(204).json(err))
    }

    addProduct(req, res, next) {
        const data = req.body
        const total = parseInt(data.priceNew) * parseInt(data.qty)
        const price = data.priceNew
        const cart = new cartModel({ ...data, price, total })

        const add = cart.save()
            .then(data => data)
            .catch(err => err)

        const qtyCart = cartModel.find().countDocuments()
            .then(qty => qty)
            .catch(err => err)

        Promise.all([qtyCart, add])
            .then(([qtyCart, add]) => res.status(200).json({ qtyCart }))
            .catch(err => res.status(204).json(err))
    }

    updateProduct(req, res, next) {
        cartModel.updateOne({ _id: req.params.id }, req.body)
            .then(() => res.send('thanh cong'))
            .catch(next)
    }
    
    deleteProduct(req, res, next) {
        cartModel.deleteOne({_id: req.params.id })
            .then(() => res.send(req.params.id))
            .catch(next)
    }

}

export default CartController = new CartController

