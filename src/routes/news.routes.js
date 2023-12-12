import { Router } from 'express'
import { getNews } from '../controllers/income.controller.js'

const router = Router()

// GET ALL
router.get('/news', getNews)

export default router
