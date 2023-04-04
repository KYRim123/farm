import express from 'express'
import CartController from '../app/controllers/CartController.js'

const router = express.Router()

router.delete("/delete/:id", CartController.deleteProduct)
router.patch("/update/:id", CartController.updateProduct)
router.post("/add", CartController.addProduct)
router.get("/", CartController.getProduct)

export default router