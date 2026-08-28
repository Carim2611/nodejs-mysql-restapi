import {Router} from 'express'
import {getStudents, getStudent, createStudents, updateStudents, deleteStudents} from '../controllers/students.controllers.js'

const router = Router()

router.get('/students', getStudents)

router.get('/students/:id', getStudent)

router.post('/students', createStudents)

router.patch('/students/:id', updateStudents)

router.delete('/students/:id', deleteStudents)

export default router