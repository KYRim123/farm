import express from 'express'
import HomeController from '../app/controllers/HomeController.js'

const router = express.Router()

router.get('/', HomeController.index)

export default router