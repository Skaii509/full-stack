import { Router } from 'express'
import { authRequired } from '../middlewares/validateToken.js'
import {getTasks, getTask, createTask, deleteTask, updateTask} from '../controllers/tasks.controller.js'

const router = Router()

//GET
router.get('/tasks', authRequired, getTasks)
router.get('/tasks/:id', authRequired, getTask)

//POST
router.post('/tasks', authRequired, createTask)

//DELETE
router.delete('/tasks/:id', authRequired, deleteTask)

//PUT
router.put('/tasks/:id', authRequired, updateTask)

export default router