import express from 'express'
import ProductController from '../app/controllers/ProductController.js'

const router = express.Router()
 router.use("/", ProductController.getProduct)

export default router