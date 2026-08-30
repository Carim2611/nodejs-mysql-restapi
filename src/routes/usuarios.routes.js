import {Router} from 'express'
import {getUsers, getUser, createUsers, deleteUsers, updateUsers} from '../controllers/usuarios.controllers.js'

const router = Router()

router.get('/usuarios', getUsers)

router.get('/usuarios/:id', getUser)

router.post('/usuarios', createUsers)

router.patch('/usuarios/:id', deleteUsers)

router.delete('/usuarios/:id', updateUsers)

export default router