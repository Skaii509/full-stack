import { Router } from 'express'
import { authRequired } from '../middlewares/validateToken.js'
import { validateSchema } from '../middlewares/validator.middleware.js'
import { getExpenses, getExpense, createExpense, deleteExpense, deleteExpenses, updateExpense } from '../controllers/expense.controller.js'

import { addExpenseSchema } from '../schemas/addExpense.schema.js'

const router = Router()

//GET ALL
router.get('/expenses', authRequired, getExpenses)

//GET ONE
router.get('/expenses/:id', authRequired, getExpense)

//POST
router.post('/expenses', authRequired, validateSchema(addExpenseSchema), createExpense)

//DELETE ALL
router.delete('/expenses', authRequired, deleteExpenses)

//DELETE ONE
router.delete('/expenses/:id', authRequired, deleteExpense)

//PUT
router.put('/expenses/:id', authRequired, updateExpense)

export default router