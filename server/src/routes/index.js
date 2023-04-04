import productRouter from './products.js'
import cartRouter from './cart.js'
import homeRouter from './home.js'
function route(app) {
    app.use("/cart", cartRouter)
    app.use("/products", productRouter)
    app.use("/", homeRouter)
}

export default route