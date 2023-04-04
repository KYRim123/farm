import {cartModel} from '../Models/cart.js'

class HomeController {
    index(req, res, next) {
        cartModel.find().countDocuments()
            .then(qtyCart => res.status(200).json({qtyCart}))
            .then(next)
    }
}

export default HomeController = new HomeController