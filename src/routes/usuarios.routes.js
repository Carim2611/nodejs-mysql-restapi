import {Router} from 'express'
import {getUsers, getUser, createUsers, updateUsers, deleteUsers} from '../controllers/usuarios.controllers.js'

const router = Router()

router.get('/usuarios', getUsers)

router.get('/usuarios/:id', getUser)

router.post('/usuarios', createUsers)

router.patch('/usuarios/:id', updateUsers)

router.delete('/usuarios/:id', deleteUsers)

export default router