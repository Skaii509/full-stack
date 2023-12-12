import { Router } from 'express'
import { authRequired } from '../middlewares/validateToken.js'
import { validateSchema } from '../middlewares/validator.middleware.js'
import { getIncomes, getIncome, createIncome, deleteIncome, deleteIncomes, updateIncome } from '../controllers/income.controller.js'

import { addIncomeSchema } from '../schemas/addIncome.schema.js'

const router = Router()

// GET ALL
router.get('/incomes', authRequired, getIncomes)

// GET ONE
router.get('/incomes/:id', authRequired, getIncome)

// POST
router.post('/incomes', authRequired, validateSchema(addIncomeSchema), createIncome)

// DELETE ALL
router.delete('/incomes', authRequired, deleteIncomes)

// DELETE ONE
router.delete('/incomes/:id', authRequired, deleteIncome)

// PUT
router.put('/incomes/:id', authRequired, updateIncome)

export default router
