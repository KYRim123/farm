import express from 'express'
import ProductController from '../app/controllers/ProductController.js'

const router = express.Router()
router.use("/detail", ProductController.detail)
router.use("/", ProductController.getProduct)

export default router