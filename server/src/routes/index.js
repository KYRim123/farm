import productRouter from './products.js'

function route(app) {
    app.use("/products", productRouter)
}

export default route