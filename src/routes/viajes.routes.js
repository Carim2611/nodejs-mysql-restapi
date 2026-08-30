import {Router} from 'express'
import {getViajes, getViaje, createViajes, updateViajes, deleteViajes} from '../controllers/viajes.controllers.js'

const router = Router()

router.get('/viajes', getViajes)

router.get('/viajes/:id', getViaje)

router.post('/viajes', createViajes)

router.patch('/viajes/:id', updateViajes)

router.delete('/viajes/:id', deleteViajes)

export default router