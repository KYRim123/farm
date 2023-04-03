import express from 'express'
import CartController from '../app/controllers/CartController.js'

const router = express.Router()

router.patch("/update/:id", CartController.updateProductCart)
router.post("/add", CartController.addProductCart)
router.get("/", CartController.getProductCart)

export default router