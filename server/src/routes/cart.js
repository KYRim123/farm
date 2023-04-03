import express from 'express'
import CartController from '../app/controllers/CartController.js'

const router = express.Router()

router.patch("/:id", CartController.updateProductCart)
router.post("/addCart", CartController.addProductCart)
router.get("/", CartController.getProductCart)

export default router