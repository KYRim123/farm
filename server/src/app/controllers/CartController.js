import { cartModel } from "../Models/cart.js";

class CartController {
    getProductCart(req, res, next) {
        cartModel.find({})
            .then(product => res.status(200).json(product))
            .catch(next)
    }
    
    addProductCart(req, res, next) {
        const data = req.body
        const total = parseInt(data.priceNew) * parseInt(data.qty) 
        const price = data.priceNew
        const cart = new cartModel({...data, price, total})
        cart.save()
            .then(data => res.status(200).json(data))
            .catch(err => err)
    }

    updateProductCart(req, res, next) {
        cartModel.updateOne({_id: req.params.id}, req.body)
            .then(() => res.send('thanh cong'))
            .catch(next)
    }

}

export default CartController = new CartController

