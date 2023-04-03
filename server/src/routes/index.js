import productRouter from './products.js'
import cartRouter from './cart.js'

function route(app) {
    app.use("/cart", cartRouter)
    app.use("/products", productRouter)
}

export default route